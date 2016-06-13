/**
 * Created by Jeroen on 13/06/16.
 */

Template.map.onRendered(function(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb2VuYmUiLCJhIjoiY2lwOGl1dXdxMDAweG9zbmxianQyMzloaiJ9.b9sxmMnMB5Nipg4cvZMI-g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v9'
    });
})