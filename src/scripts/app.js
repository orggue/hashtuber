angular.module("hashtuber", ['ui.router','ngRoute','ngSanitize','ngAnimate','pascalprecht.translate','720kb.socialshare','sc.twemoji','angularMoment'])
.constant('Config', {
  apiBase: '/api/search',
  colors: [
    "#6caff1",
    "#ff5967",
    "#ff794d",
    "#5082e5",
    "#be5fb6",
    "#33ccbe",
    "#ffaf40",
    "#68bf60",
    "#cccc52",
    "#f279ac",
    "#7870cc",
    "#548899"
  ]
})
.config(function($stateProvider,$urlRouterProvider,$locationProvider,$translateProvider){
  $stateProvider
  .state('hashtag',{
    url:'/search/{hashtag}',
    templateUrl:'../views/base/_tweets.html',
    controller:'tweetCtrl',
    params:{
      hashtag:{squash:true}
    }
  })
  .state('home',{
    url:'/',
    controller:'homeCtrl',
    templateUrl:'../views/base/_home.html'
  });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $translateProvider.translations('en', {
    info_two: 'Click on <strong>#HashTuber</strong> and change it to your hashtag',
    two: 'Choose your hashtag',
    info_one: 'What are you waiting for? press <strong>Enter</strong> or <strong>Intro</strong>',
    one: 'Easy peasy',
    info_go: "Start your streaming questions and don't forget to share this page, It's <strong>FREE</strong>!!",
    go: 'Start',
    power: 'Powered by orggue ',
    beer: ' Buy me a beer',
    load: 'LOAD MORE',
    filter_date: 'Date',
    filter_rt: 'Retweet',
    filter_fav: 'Favorites',
    filter_ran: 'Random',
    tool_tip_share: 'Share me',
    tool_tip_working: 'Working in progress',
    share: '#HashTuber a really great tool to play with ',
    tip: 'Click to search new hashtag',
    notification: 'No more questions right now, try again in a sec...',
    placeholder: 'Find a question containing...'
  });
  $translateProvider.translations('es', {
    info_two: 'Click en <strong>#HashTuber</strong> y escribe tu propio hashtag',
    two: 'Elige un hashtag',
    info_one: '¿A que estás esperando? presiona <strong>Enter</strong> o <strong>Intro</strong>',
    one: 'Demasiado facil',
    info_go: 'Empieza tu streaming respondiendo las preguntas y no olvides compartir hashtuber, es <strong>GRATIS</strong>!!',
    go: 'Empieza',
    power: 'Powered by orggue',
    beer: 'Comprame una cerveza',
    load: 'CARGAR MAS',
    filter_date: 'Fecha',
    filter_rt: 'Retweets',
    filter_fav: 'Favoritos',
    filter_ran: 'Aleatorio',
    tool_tip_share: 'Comparteme',
    tool_tip_working: 'Trabajando en esto',
    share: 'Hazme preguntas, con #HashTuber contesto todas ',
    tip: 'Click para buscar nuevo hashtag',
    notification: 'No tienes mas preguntas, intentalo en unos segundos...',
    placeholder: 'Busca una pregunta concreta'
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitize');
})
.run(function(randomcolor,$translate,amMoment){
  randomcolor.setHeaderColor(randomcolor.getRandomColor());

  var userLang = navigator.language || navigator.userLanguage;

  if (userLang.indexOf("es") != -1 || userLang.indexOf("sp") != -1){
    $translate.use('es');
    amMoment.changeLocale('es');
  }else{
    $translate.use('en');
    amMoment.changeLocale('en');
  }
});
