import mongoose from 'mongoose';

const schemas= {
    users: {
        email: {
          type: String,
          unique:true,
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
          type: String,
          default: Date.now
        },
        emailVerified:{
          type:Boolean
        },

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
        oAuthToken:{
            type: String,
            required: true
        },
        oAuthVerifier:{
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
        sentiment:{
            type: Number
        },
        parentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            default: null
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        commentCount: {
            type: Number,
            default: 0
        },
        timestamp: { 
            type: Date, 
            default: Date.now 
        }
    },

}
export default {dbSchema : schemas}