import json
import logging
import boto3

# Configure logger for CloudWatch logs
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Initialize the CloudWatch client
cloudwatch = boto3.client('cloudwatch', region_name='us-east-1')

def lambda_handler(event, context):
    logger.info("Lambda triggered with event: %s", event)
    
    try:
        # Example processing logic
        process_data = event.get('data', 'default_data')
        logger.info("Processing data: %s", process_data)
        
        # Publish a custom metric to CloudWatch
        cloudwatch.put_metric_data(
            Namespace='ByteAI/RecipeApp',
            MetricData=[
                {
                    'MetricName': 'ProcessedRequests',
                    'Dimensions': [
                        {'Name': 'Service', 'Value': 'RecipeAPI'}
                    ],
                    'Value': 1,
                    'Unit': 'Count'
                }
            ]
        )
        logger.info("Custom metric published to CloudWatch.")
        
        return {
            'statusCode': 200,
            'body': json.dumps('Processing completed successfully.')
        }
    except Exception as e:
        logger.error("Error processing data: %s", str(e))
        return {
            'statusCode': 500,
            'body': json.dumps('Error processing data.')
        }
