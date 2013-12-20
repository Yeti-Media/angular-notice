Angular Notice (ng-notice) is a notification plugin.

Features:

- Supports multiple box messages
- Levels of notifications
- Callbacks

Usage:
  
Directive:

ng-notice: EAC. When is used as attribute you can use the value for name the element

Factory:

$flash(options): used for show the notifications inside of ng-notice elements 

options for flash: object with next properties

- element: the box that you want to display the message
- level: the message level. It is used for add a class to the message box
- message: the message text
- methods: prepend (prepend the message to the box), append (append the message to the box) and insert (replace the notification)
- before: a function callback. The parameter passed to the function is the element. Runs before the text is attached the box
- after: a function callback. The parameter passed to the function is the element. Runs after the text is attached the box
 

Example:

See the example folder.

License:

MIT.
