// Import necessary modules
const mongoose = require('mongoose');
const User = require('../models/User.js');
const Thought = require('../models/Thought.js');

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();

    // Create users
    const users = await User.create([
      { username: 'user1', email: 'user1@example.com' },
      { username: 'user2', email: 'user2@example.com' },
    ]);

    // Add friends
    await User.findByIdAndUpdate(users[0]._id, { $push: { friends: users[1]._id } });
    await User.findByIdAndUpdate(users[1]._id, { $push: { friends: users[0]._id } });
    
    // Create thoughts with reactions
    const thoughts = await Thought.create([
      { thoughtText: 'Thought 1', username: 'user1', reactions: [{ reactionBody: 'Reaction 1', username: 'user2' }], userId: users[0]._id },
      { thoughtText: 'Thought 2', username: 'user2', reactions: [{ reactionBody: 'Reaction 2', username: 'user1' }], userId: users[1]._id },
    ]);

    // Add thoughts to users
    await User.findByIdAndUpdate(users[0]._id, { $push: { thoughts: thoughts[0]._id } });
    await User.findByIdAndUpdate(users[1]._id, { $push: { thoughts: thoughts[1]._id } });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Call the seedDatabase function
seedDatabase();
