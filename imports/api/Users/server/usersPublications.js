import { Meteor } from 'meteor/meteor';


Meteor.publish('users.all', function publishUsers() {
  return Meteor.users.find({},
    {
      fields: {
        createdAt: 1,
        profile: 1,
        username: 1,
        emails: 1,
        roles: 1,
      },
    });
});