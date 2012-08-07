Angular Notice (ng-notice) is a notification plugin.

Features:

- Supports multiple box messages
- Levels of notifications
- Callbacks

Usage:
  
  - ng-notice: EAC. When is used as attribute you can use the value for name the element
  - $flash: provides the notify function. You can pass up to three params: level, message, element. 
    notify also emits the event "event:ngNotification".

Example:

http://jsfiddle.net/nsanta/K8JYD/13/


Roadmap:

- send the notification data direct to the event
- notify: pass the notification callback as parameter 
- better specs
- better documentation

