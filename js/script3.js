$("document").ready(function(){
  var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
  };


  var ide = getUrlParameter("ide");
  var precioPasar =  0 ;
  $(ViajesEnteros).each(function(index, el) {
    if (el["id"]==ide) {
      console.log("si + ",ide);
      precioPasar=el["price"];
      $(".Tcarrito").text("Deal: "+el["city"]);
    }
    else {
      console.log("no");
    }
  });

$("#selectable li").on("click",function(){
  if (!$(this).hasClass("selected")) {
    $(this).toggleClass("seleccionada plaza");
    sitioAvion(precioPasar);
    if ($(this).hasClass("seleccionada")) {
      var localS = localStorage.getItem("sillas"+ide)+","+$(this).data("posicion");
      console.log(localS);
      localStorage.setItem("sillas"+ide,localS);
    }else {
      var localS = localStorage.getItem("sillas"+ide);
      console.log(localS);
      localS = localS.replace(","+$(this).data("posicion"),"");
      console.log(localS);
      localStorage.setItem("sillas"+ide,localS);
    }
  }else {
    console.log("no");
  }
});


$("#reset").click(function(){
  localStorage.removeItem("sillas"+ide);
    localStorage.setItem("sillas"+ide,"0");
});
var fila = $("#selectable li");

var but = localStorage.getItem("sillas"+ide);

var butArr = "";
if (but != null) {
  var butArr = but.split(",");
}

fila.each(function (){
  var self = $(this);


  $(butArr).each(function(a,b,c){

    if (b==$(self).data("posicion")) {
        $(self).addClass("selected cogida");
    }
  });
});

});
