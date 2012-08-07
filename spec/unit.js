describe("$flash", function() {
  var rootScope;
  var $injector = angular.injector(['ng', 'Notification']);

  beforeEach(function(){
    $injector.invoke(function($rootScope, $flash){
      rootScope = $rootScope;
      $flash.notify('info', 'message', 'element');
    })
  });

  it("should set the notification message on the root scope", function(){
    expect(rootScope.notification.message).toEqual('message');
  });

  it("should set the notification level on the root scope", function(){
    expect(rootScope.notification.level).toEqual('info');
  });
  
  it("should set the notification element on the root scope", function(){
    expect(rootScope.notification.element).toEqual('element');
  });
});



describe("ngNotice", function() {
  var rootScope;
  var compile;
  var $injector = angular.injector(['ng', 'Notification']);

  beforeEach(function(){
    $injector.invoke(function($rootScope, $compile){
      rootScope = $rootScope;
      compile = $compile;
    });
  });


  it('should set ng-notice attribute to default when has no value',function(){
    element = '<div ng-notice></div>';
    element = compile(element)(rootScope);
    rootScope.$digest();
    expect(element.attr('ng-notice')).toEqual('default');
  });

  it('should not set ng-notice attribute when has a value',function(){
    element = '<div ng-notice="value"></div>';
    element = compile(element)(rootScope);
    rootScope.$digest();
    expect(element.attr('ng-notice')).toEqual('value');
  });

  it('should set notification value on rootScope to nil',function(){
    rootScope.notification = 'something';
    element = '<div ng-notice></div>';
    element = compile(element)(rootScope);
    rootScope.$digest();
    expect(rootScope.notification).toEqual(null);
  });



});
