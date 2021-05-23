const express = require('express');
const searchControllers = require('../controllers/searchControllers');
const router = express.Router();

router.use(express.json());
router.post('/search',
searchControllers.sendUserSearch,
searchControllers.sendID,
(req, res) => {
  const { details } = res.locals;
  return res.status(200).json({ details })
}
);

// client will send a request to '/api/subscribe' after the user has selected their restaurants and clicked the subscribe button. The data received will be either in form of object or array of restaurant IDs
// this is what we save in db

// we will also need to schedule automatic emails to be sent out here for each restaurant using the NodeMailer and Cron node modules

// req.body = ['restaurant1', 'restaurant2', 'restaurant3']
const sendEmails = () => {
  // for each restaurant in req.body
    // query the Yelp API again, get the restaurants closing hours
    // create a cron job, schedule it to run one hour before close
      // send an email to be sent out 1 hour before the restaurant closes
}

// email 1 scheduled
// email 2 scheduled
// email 3 scheduled

router.use('/subscribe'
  ,(req, res) => {
  console.log('subscribe request received!')
  console.log('Client Request Body: ', req.body)
  res.status(200).json('Subscribed!')
})
//will be sending the user all there subs
router.get('/')
//process client unsubscribe
router.delete('/unsubscribe')

module.exports = router;

