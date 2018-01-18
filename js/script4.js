
var sitio = 0;




function sitioAvion(precio){
  console.log(precio);
  $(".elCarrito").find(".addss").remove();
  var precioBueno=precio;
  $(".plaza").each(function(index, el) {
    if ($(el).data("posicion")=="Vip 1"||$(el).data("posicion")=="Vip 2"||$(el).data("posicion")=="Vip 3"||$(el).data("posicion")=="Vip 4") {
      var PrecioA = precio.split("€");
      console.log(PrecioA);
      PrecioA[0]= parseInt(PrecioA[0])+70;
      precio=PrecioA.join("")+"€";
    }else {
      precio=precioBueno;
    }

    console.log(el);
    var sillas_seleccionadas = '  <div class="col col-md-8 addss">place '+$(el).data("posicion")+' </div><div class="col col-md-4 addss"><span>'+precio+'</span></div>';
    $(".elCarrito").append(sillas_seleccionadas);


  });
}
$("document").ready(function () {










$("#confirm").on('click',function() {
  if ($('.addss').length > 0) {
  $(".compraFinalizada").show();
  $(".compraFinalizada").css("transform","translateY(-150px)");
  setTimeout(function(){
    window.location = "index.html";
  }, 3600);
}else {
  if($('.noT').length == 0)
  $('<p class="red noT">No tiene nada</p>').insertAfter(this);
}
});
$(".compraFinalizada").hide();
});
