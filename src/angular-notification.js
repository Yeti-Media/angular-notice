'use strict';

angular.module('Notification', []).factory('$flash', function($rootScope) {
    var service = {
        notify : function(level, message, element){
            
          $rootScope.notification =  {
              level: level,
              message: message,
              element: (element || 'default')
          };
          $rootScope.$emit("event:ngNotification");
          }    
        };
    return service;
  }).directive('ngNotice', function($rootScope) {
    noticeObject = {
       replace: false,
       transclude: false,
       link: function (scope, element, attr){
         $rootScope.$on("event:ngNotification", function(event){
           if (attr.ngNotice == $rootScope.notification.element){  
             element.html("<span class=\""+ $rootScope.notification.level +
                          "\">" + $rootScope.notification.message + "</span>");
           }
         });
         $rootScope.notification = null;
         element.attr('ng-notice',(attr.ngNotice || 'default'));
       }
    };
    return noticeObject;  
});
