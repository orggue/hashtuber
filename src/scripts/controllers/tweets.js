angular.module('hashtuber')
.controller('tweetCtrl',function($scope,$stateParams,$element,$translate,randomcolor,middleware){

  $scope.color = randomcolor.getHeaderColor();

  $scope.load = $translate.instant('load');
  $scope.placeholder = $translate.instant('placeholder');
  $scope.button = {
    date : $translate.instant('filter_date'),
    rt: $translate.instant('filter_rt'),
    fav : $translate.instant('filter_fav'),
    ran : $translate.instant('filter_ran'),
    tooltip : $translate.instant('tool_tip_working')
  };

  $scope.reverse = false;
  $scope.sortType = 'date';

  $scope.order = function(type,rev){
    $scope.reverse = rev;
    $scope.sortType = type;
  };

  $scope.tweets = [];

  $scope.$on('EndSearch',function(error, data){
    angular.forEach(data.tweets,function(tweet){
      $scope.tweets.push(tweet);
    });
  });

  if ($stateParams.hashtag) {
    middleware.setFilter('hashtag',$stateParams.hashtag);
  }

  middleware.search();

  $scope.randomQuestion = function(){
    //var index = Math.floor((Math.random() * ($scope.tweets.length - 1)));
    //$scope.tweets[index]
  };

  $scope.loadMore = function(){
    middleware.setFilter('since_id',$scope.tweets[$scope.tweets.length - 1].id);
    middleware.loadMore();
  };

});
