const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema (
    {
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        writtenBy: {
            type: String
        },
        replyBody: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.new,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
                getters: true
                },
            id: false
    }
);

const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    replies: [ReplySchema],  
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
            },
            id: false
    }
);

CommentSchema.virtual('replyCount').get( function() {
    return this.replies.length
})

const Comment = model('Comment', CommentSchema);

module.exports = Comment;