import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import "../imports/both/startup";
import { App } from '../imports/ui/App';


Meteor.startup(() => {

    Meteor.subscribe("tasks");
    Meteor.subscribe("users.all");
    render(<App/>, document.getElementById('react-target'));

});
