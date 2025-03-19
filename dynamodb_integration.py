#!/usr/bin/env python3
import boto3
from botocore.exceptions import ClientError

# Initialize DynamoDB resource in the us-east-1 region
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('RecipeData')

def insert_recipe(recipe):
    """Insert a recipe record into DynamoDB."""
    try:
        response = table.put_item(
            Item={
                'RecipeID': recipe['RecipeID'],
                'Name': recipe['Name'],
                'Ingredients': recipe['Ingredients'],
                'PrepTime': recipe['PrepTime'],
                'Servings': recipe['Servings']
            }
        )
        print(f"Successfully inserted recipe: {recipe['RecipeID']}")
        return response
    except ClientError as e:
        print("Error inserting recipe:", e.response['Error']['Message'])
        return None

def get_recipe(recipe_id):
    """Retrieve a recipe record from DynamoDB by RecipeID."""
    try:
        response = table.get_item(Key={'RecipeID': recipe_id})
        if 'Item' in response:
            print("Recipe found:", response['Item'])
            return response['Item']
        else:
            print("Recipe not found.")
            return None
    except ClientError as e:
        print("Error retrieving recipe:", e.response['Error']['Message'])
        return None

if __name__ == '__main__':
    sample_recipe = {
        'RecipeID': 'R001',
        'Name': 'Tomato Basil Soup',
        'Ingredients': ['Tomato', 'Basil', 'Garlic', 'Onion', 'Olive Oil'],
        'PrepTime': 30,
        'Servings': 4
    }
    insert_recipe(sample_recipe)
    get_recipe('R001')
