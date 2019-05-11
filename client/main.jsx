import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-config';

Tracker.autorun(() => {
  const isAutheticated = !!Meteor.userId();
  onAuthChange(isAutheticated);
});

Session.set('name', 'Jose Luna');
let name = Session.get('name');
console.log('NAME', name);

Meteor.startup(() => {
  render(routes, document.getElementById("react-target"));
});
