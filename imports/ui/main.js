import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});


// Template.map.onRendered(function(){
//     mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb2VuYmUiLCJhIjoiY2lwOGl1dXdxMDAweG9zbmxianQyMzloaiJ9.b9sxmMnMB5Nipg4cvZMI-g';
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/outdoors-v9'
//     });
// })