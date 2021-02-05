import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import "../imports/both/startup";
import { App } from '../imports/ui/App';


Meteor.startup(() => {

    const sub1 = Meteor.subscribe("tasks");
    console.log("client main: ", sub1)
    render(<App/>, document.getElementById('react-target'));

});
