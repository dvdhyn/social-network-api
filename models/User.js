import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /.+\@.+\..+/ 
    },
    thoughts: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Thought' 
    }],
    friends: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    virtuals: {
        friendCount: {
            get() {
                return this.friends.length;
            }
        }
    }
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
