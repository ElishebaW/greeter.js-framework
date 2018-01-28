var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).logIn();

  $('#login').click(function() {
    var loginGrtr = G$('Jokester');
    var setIntro = J$();
    var setInstructions = J$();
    var setSetup = J$();
    var setClimax = J$();
    var setPunchline = J$();
    var setSetupInsertText = J$();
    var setClimaxInsertText = J$();
    var setPunchlineInsertText = J$();

  $('#logindiv').hide();
  $('#logoutdiv').css("visibility","visible");
  $('.jumbotron').css("visibility","visible");
  $('.form-inline').css("visibility","visible");
  setIntro.setLang($('#lang').val()).HTMLIntro('#jokeintro', true);
  setInstructions.setLang($('#lang').val()).HTMLInstructions('#jokeinstructions',true);
  setSetup.setLang($('#lang').val()).HTMLSetup('#jokesetup',true);
  setClimax.setLang($('#lang').val()).HTMLClimax('#jokeclimax',true);
  setPunchline.setLang($('#lang').val()).HTMLPunchline('#jokepunchline',true);
  setSetupInsertText.setLang($('#lang').val()).HTMLSetupInsertText('#jokesetupinserttext',true);
  setClimaxInsertText.setLang($('#lang').val()).HTMLClimaxInsertText('#jokepunchline',true);
  setPunchlineInsertText.setLang($('#lang').val()).HTMLPunchlineInsertText('#jokepunchline',true);

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).logIn();
  setTimeout(function(){
    $("#greeting").hide()}, 1000)
   $('#greeting').css("display","block");
 })

$('#logout').click(function() {
  var logOut = G$('John', 'Doe')
  $('#logindiv').show();
  $('#logoutdiv').css("visibility","hidden");
  $('.jumbotron').css("visibility","hidden");
  $('.form-inline').css("visibility","hidden");
  $('#greeting').hide();
  logOut.setLang($('#lang').val()).logOut();
})
