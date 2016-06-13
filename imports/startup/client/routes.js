/**
 * Created by Jeroen on 12/06/16.
 */

import {FlowRouter} from 'meteor/kadira:flow-router'
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

import '/imports/ui/main'

FlowRouter.route('/', {
    name:'home',
    action: function (){
        BlazeLayout.render('main')
    }
})
