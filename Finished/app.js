var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).logIn();

$('#login').click(function() {
  var loginGrtr = G$('John', 'Doe');

$('#logindiv').hide();
$('#logoutdiv').css("visibility","visible");
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).logIn();
$('#greeting').css("display","block");
})

$('#logout').click(function() {
  var logOut = G$('John', 'Doe')
  $('#logindiv').show();
  $('#logoutdiv').css("visibility","hidden");
  $('#greeting').hide();
  logOut.setLang($('#lang').val()).logOut();
})
