var login =  false;
var user="";
var password="";

var users=[
  {
    "name":"admin",
    "passord":"123456"
  },
  {
    "name":"user1",
    "passord":"123456"
  }
];
$("document").ready(function() {




  $(".LOGOUT").hide();
$("#login").on('click', function(event) {
  event.preventDefault();
  $(".errorLogin").addClass("desaparecer");

  var Name = $("#inputUser").val();
  var Pass = $("#inputPassword").val();
  $(users).each(function(index, el) {
    if (el["name"]==Name && el["passord"]==Pass) {
      login =  true;
      $(".LOGIN").hide();
      $(".LOGOUT").show();
    }
  });
  if (login==false) {
    $(".errorLogin").removeClass("desaparecer");
  }
});
$("#logout").on('click', function(event) {
      event.preventDefault();
      login=false;
      $(".LOGIN").show();
      $(".LOGOUT").hide();
      console.log(login);
});
$('#MyBotton').on("click",function(){
  $("#myModal").modal('show');
});
// Form
$('#myForm').validator({
  custom: {
    equals: function($el) {
      var matchValue = $("#passw1").val(); // foo
      if ($el.val() !== matchValue) {
        return "Hey, the password not are equals" + matchValue
      }
    }
  }
});
(function() {
}());
  $("#crear").on("click",function(event){
    event.preventDefault();
    var formulario = $("#myForm");
    if (!$("#crear").hasClass("disabled")) {
      var Name=$(formulario).find("#Nombre").val(),
      Surnames=$(formulario).find("#Surnames").val(),
      Email=$(formulario).find("#inputEmail").val(),
      Phone=$(formulario).find("#Phone").val(),
      Country=$(formulario).find("#Country").val(),
      Sex=$(formulario).find("#Sex").val(),
      User=$(formulario).find("#User").val(),
      Pass=$(formulario).find("#passw1").val();
      mandar(Name,Surnames,Email,Phone,Country,Sex,User,Pass);
    }


    function mandar(Name,Surnames,Email,Phone,Country,Sex,User,Pass){
      $.ajax({
        url       : "php/usuarios.php",
        type      : "POST",
        data      : {
          nam  :  Name,
          ape  :  Surnames,
          ema  :  Email,
          pho  :  Phone,
          coun :  Country,
          sex  :  Sex,
          use  :  User,
          pas  :  Pass
        },
        success   :function(data){
          console.log(data);
        }
      });
    }
  });




$("#Sillas").modal("hide");
var contForm = $("#ContForm");
var slectForm  = $(contForm).find("#file");
var fotoForm  = $(".Fcrear");

$('.carousel-item').carousel();
// Abrir noticia
});
