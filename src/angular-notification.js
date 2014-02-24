'use strict';

angular.module('ngNotification', []).factory('$flash', function($rootScope) {
    var service = function(options){
                    $rootScope.$emit("event:ngNotification", options);
                  }    
    return service;
  }).directive('ngNotice', function($rootScope) {
    var noticeObject = {
       replace: false,
       //transclude: false,
       link: function (scope, element, attr){
         $rootScope.$on("event:ngNotification", function(event, notification){
           if (attr.ngNotice == notification.element){
             var message = "<div class=\""+ notification.level + "\">" + 
                        notification.message + 
                        "</div>";
             if (typeof notification.before === 'function'){
               notification.before(element);
             }
             switch (notification.method){
               case 'append':
                 element.append(message);
                 break;
               case 'prepend':
                 element.prepend(message);
                 break;
               default:
                 element.html(message);
             }
             if (typeof notification.after === 'function'){
               notification.after(element);
             }
           }
         });
       }
    };
    return noticeObject;  
});
