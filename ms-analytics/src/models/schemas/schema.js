import mongoose from 'mongoose';

const schemas = {
    users: {
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true
        },
        fullName: {
            type: String,
            trim: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        emailVerified: {
            type: Boolean
        },
        previousPassword: {
            type: String
        },
        passwordChangeAt: {
            type: String
        },
        emailToken: {
            type: String
        },
        passwordToken: {
            type: String
        },
        oAuthToken: {
            type: String
        },
        oAuthTokenSecret: {
            type: String
        }
    },
    userTokens: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        source: {
            type: String,
            default: null
        },
        oAuthToken: {
            type: String,
            required: true
        },
        oAuthVerifier: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
    posts: {
        text: {
            type: String
        },
        source: {
            type: String
        },
        location: {
            type: String
        },
        sentiment: {
            type: Number
        },
        parentId: {
            type: String,
            default: null
        },
        userId: {
            type: String,
            default: null
        },
        commentCount: {
            type: Number,
            default: 0
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
        twitterPostId: {
            type: String,
            default: null
        },
        favoriteCount: {
            type: Number,
            default: 0
        },
        retweetCount: {
            type: Number,
            default: 0
        }
    },

}
export default {
    dbSchema: schemas
}