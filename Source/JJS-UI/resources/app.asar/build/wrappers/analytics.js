const ua = require('universal-analytics');
const uuid = require('uuid/v4');

const SaveData = require('../settings')

//Start anonymous analytics tracking
var analyticsid = SaveData().analyticsid //To identify a session
if(!analyticsid){ //Creates analytics id if one isnt set
    analyticsid = uuid()
    SaveData({analyticsid: analyticsid})
}

var usr = ua('UA-120895803-7', analyticsid);

class Analytics {
    trackEvent(category, action, label, value) {
        usr
        .event({
            ec: category,
            ea: action,
            el: label,
            ev: value,
        })
        .send();
    }

    pageview(page){
        usr.pageview(page).send()
    }
}

module.exports = new Analytics()