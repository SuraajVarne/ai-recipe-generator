const redis = require('redis');

// Create a Redis client connected to localhost on default port 6379
const client = redis.createClient({ host: '127.0.0.1', port: 6379 });

client.on('error', (err) => {
    console.error('Redis error:', err);
});

client.on('connect', () => {
    console.log('Connected to Redis server');
});

// Cache a recipe object for 1 hour (3600 seconds)
function cacheRecipe(key, data) {
    client.setex(key, 3600, JSON.stringify(data), (err, reply) => {
        if (err) {
            console.error('Error setting cache:', err);
        } else {
            console.log(`Cache set for key "${key}": ${reply}`);
        }
    });
}

// Retrieve the cached recipe object
function getCachedRecipe(key) {
    client.get(key, (err, data) => {
        if (err) {
            console.error('Error retrieving cache:', err);
        } else if (data) {
            console.log(`Cache hit for key "${key}":`, JSON.parse(data));
        } else {
            console.log(`No cache found for key "${key}"`);
        }
    });
}

// Example usage:
const recipeData = {
    RecipeID: 'R001',
    Name: 'Tomato Basil Soup',
    Ingredients: ['Tomato', 'Basil', 'Garlic', 'Onion', 'Olive Oil'],
    PrepTime: 30,
    Servings: 4
};

cacheRecipe('recipe_R001', recipeData);
getCachedRecipe('recipe_R001');
