const { Schema, model } = require('mongoose');
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: format_date
        },
        username: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
   return this.reactions.length;
});

function format_date(createdAt) {
    return createdAt.toLocaleDateString();
}

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
