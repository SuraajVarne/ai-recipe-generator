const AWS = require('aws-sdk');

// Configure AWS SDK for region us-east-1
AWS.config.update({ region: 'us-east-1' });

const sqs = new AWS.SQS();
const sns = new AWS.SNS();

const queueUrl = 'https://sqs.us-east-1.amazonaws.com/123456789012/ByteAIQueue';
const topicArn = 'arn:aws:sns:us-east-1:123456789012:ByteAIInferenceTopic';

// Send an AI inference request to the SQS queue
function sendInferenceRequest(message) {
    const params = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify(message)
    };

    sqs.sendMessage(params, (err, data) => {
        if (err) {
            console.error('Error sending message to SQS:', err);
        } else {
            console.log('Message sent to SQS with ID:', data.MessageId);
            // Optionally, notify via SNS after queuing the request
            publishSNSNotification(data.MessageId);
        }
    });
}

// Publish a notification to SNS after queuing the request
function publishSNSNotification(messageId) {
    const params = {
        Message: `Inference request queued with Message ID: ${messageId}`,
        TopicArn: topicArn
    };

    sns.publish(params, (err, data) => {
        if (err) {
            console.error('Error publishing to SNS:', err);
        } else {
            console.log('SNS notification sent with Message ID:', data.MessageId);
        }
    });
}

// Example usage:
const aiRequest = {
    requestId: 'REQ-1001',
    recipeQuery: 'Generate a vegan dessert recipe'
};

sendInferenceRequest(aiRequest);
