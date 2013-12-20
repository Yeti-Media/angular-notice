describe("$flash", function() {
  var rootScope;
  var flash;
  var $injector = angular.injector(['ng', 'ngNotification']);

  beforeEach(function(){
    $injector.invoke(function($rootScope, $flash){
      rootScope = $rootScope;
      flash = $flash;
    });
  });

  it("should emit event:ngNotification",function(){
    spyOn(rootScope, '$emit').andCallThrough();
    flash({level:'info', message: 'message', element: 'element'});

    expect(rootScope.$emit).toHaveBeenCalledWith('event:ngNotification',
      {level:'info', message: 'message', element: 'element'});
  });

 
});



describe("ngNotice", function() {
  var rootScope;
  var compile;
  var flash;
  var element;
  var $injector = angular.injector(['ng', 'ngNotification']);

  beforeEach(function(){
    $injector.invoke(function($rootScope, $compile, $flash){
      rootScope = $rootScope;
      compile = $compile;
      flash = $flash;
      element = '<div ng-notice="flash"></div>';
      element = compile(element)(rootScope);
      rootScope.$digest();
    });
  });


  it('should set ng-notice attribute to default when has no value',function(){
    expect(element.attr('ng-notice')).toEqual('flash');
  });

  it("should append the notification", function(){
    flash({level:'info', message: 'first', element: 'flash', method: 'append'});
    flash({level:'info', message: 'second', element: 'flash', method: 'append'});
    expect(element.html()).toContain('<div class="info">first</div><div class="info">second</div>');
  }); 

  it("should prepend the notification", function(){
    flash({level:'info', message: 'first', element: 'flash', method: 'prepend'});
    flash({level:'info', message: 'second', element: 'flash', method: 'prepend'});
    expect(element.html()).toContain('<div class="info">second</div><div class="info">first</div>');
  }); 
  
  it("should insert the notification", function(){
    flash({level:'info', message: 'first', element: 'flash'});
    expect(element.html()).toContain('<div class="info">first</div>');
    flash({level:'info', message: 'second', element: 'flash'});
    expect(element.html()).not.toContain('<div class="info">first</div>');
    expect(element.html()).toContain('<div class="info">second</div>');
  }); 

  it("should run the before callback", function(){
    var beforeCallback = function(element){};
    var options = {level:'info', message: 'first', element: 'flash', before: beforeCallback};
    spyOn(options, 'before').andCallThrough();
    flash(options);
    expect(options.before).toHaveBeenCalledWith(element);
  }); 
  it("should run the after callback", function(){
    var afterCallback = function(element){};
    var options = {level:'info', message: 'first', element: 'flash', after: afterCallback};
    spyOn(options, 'after').andCallThrough();
    flash(options);
    expect(options.after).toHaveBeenCalledWith(element);
  }); 

});
