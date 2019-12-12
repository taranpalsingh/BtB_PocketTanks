import express from 'express';
import api from '../../controllers';
import PassportTwt from '../../middlewares/passport-twitter';
import Validation from '../../middlewares/validation';



const validation = new Validation()

let apiRoutes = (router) => {
    router = express.Router();

    router.post('/registration', validation.registration, api.users.registration);
    router.post('/login', validation.login, api.users.login);
    router.post('/forgotpassword', validation.forgotPassword, api.users.forgotPassword);
    router.post('/forgotPasswordChanged', validation.forgotPasswordChanged, api.users.forgotPasswordChanged);
    router.post('/changePassword', validation.changePassword, api.users.changePassword);
    router.post('/emailverification', validation.emailVerification, api.users.emailVerification);

    // Routes for OAuth
    router.get('/auth/twitter', PassportTwt.authenticate('twitter'));
    router.post('/auth/twitter/extracttokens', api.auth.twitter);

    // twitter analytics routes
    router.get('/twitter/posts', api.twitter.posts);
    router.get('/twitter/kpis', api.twitter.kpis);
    router.get('/twitter/sentiment', api.twitter.sentiment);
    router.get('/twitter/fetchPosts', api.twitter.fetchPostsFromTwitter);
    router.get('/twitter/profilestats', api.twitter.profileStats);
    router.post('/twitter/tweet', api.twitter.postTweet);
    router.post('/twitter/mediaTweet', api.twitter.postMediaTweet);
    router.post('/twitter/scheduleTweet', api.twitter.scheduleTweet);
    router.get('/twitter/scheduleTweet', api.twitter.getScheduledTweet);
    router.get('/twitter/scheduleTweet/:id', api.twitter.getScheduledTweet);
    router.put('/twitter/scheduleTweet/:id', api.twitter.updateScheduledTweet);
    router.delete('/twitter/scheduleTweet/:id', api.twitter.deleteScheduledTweet);
    router.get('/twitter/wordcloud', api.twitter.wordcloud);

    router.get('/tweets/:username', api.auth.fetchComment);
    router.get('/twitter/profile', api.twitter.twitterProfile);


    return router;
}
export default apiRoutes;