angular.module("ExampleApp", ['ngNotification'])
  .factory('$flash_prepend', function($flash){
    return function(options){
      options.method = 'prepend';
      options.element = 'prepend';
      options.after = function(element){
        console.log(element.find('div').length);
        if(element.find('div').length > 3){
          element.find('div:last').hide(500).remove();
        }
      };
      $flash(options);
    };
  })
  .factory('$flash_append', function($flash){
    return function(options){
      options.method = 'append';
      options.element = 'append';
      options.after = function(element){
        element.find('div:last').show(500);
      };
      $flash(options);
    };
  })
  .factory('$flash_insert', function($flash){
    return function(options){
      options.element = 'insert';
      options.level = "alert";
      options.before = function(element){
        element.stop(true, true).show(500).delay(5000).hide(500);
      };
      console.log('inserting');
      $flash(options);
    };
  })
  .controller("ExampleCtrl", function($scope, $flash_prepend, $flash_append, $flash_insert){
    $scope.submit = function(){
      var options = {message: $scope.message};
      console.log($scope);
      switch($scope.notification_type){
        case 'insert':
          $flash_insert(options);
          break;
        case 'prepend':
          $flash_prepend(options);
          break;
        case 'append':
          $flash_append(options);
          break;
      }
    }
  })

