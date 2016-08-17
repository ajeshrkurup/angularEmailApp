app.controller('InboxCtrl', ['InboxFactory', function InboxCtrl(InboxFactory) {
    
    'use strict';
    
    this.title = "My Inbox";
    
    console.log(InboxFactory);
}]);