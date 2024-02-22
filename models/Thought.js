import mongoose from 'mongoose';

const ThoughtSchema = new mongoose.Schema({
    throughText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [{
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    virtuals: {
        reactionCount: {
            get() {
                return this.reactions.length;
            }
        }
    }
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;
