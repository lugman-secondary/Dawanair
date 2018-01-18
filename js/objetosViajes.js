var Viajes = [];
$("document").ready(function () {
  //  elementos html a imprimir

  //////// Viajes Objeto
 function  viaje(id,city,description,price,img) {
   return{
    "id":id,
    "city":city,
    "description":description,
    "price":price,
    "imagen":img
  }
  };
Viajes.push(viaje(
  1,
  "Moscow",
  "Moscow is the capital and the most populated federal entity in Russia. tea",
  "360€",
  "img/moscow.jpg"
));
Viajes.push(viaje(2,
  "Hawai",
  "Hawaii is one of fifty states that, along with Washington",
  "570€",
  "img/hawai.jpg"));
Viajes.push(viaje(3,
  "Milan",
  "Milan is the largest metropolitan area in Italy and the second largest municipality in Italy for p",
  "400€",
  "img/milan.jpg"));
  Viajes.push(viaje(4,
    "France",
    "France is the largest metropolitan area in Italy and the second largest municipality in Italy for p",
    "300€",
    "img/agra.png"));
  Viajes.push(viaje(5,
      "Dubai",
      "Dubai is the largest metropolitan area in Italy and the second largest municipality in Italy for p",
      "300€",
      "img/dubai.png"));
  Viajes.push(viaje(6,
      "Giza",
      "Giza is the largest metropolitan area in Italy and the second largest municipality in Italy for p",
      "300€",
      "img/giza.png"));
  Viajes.push(viaje(7,
      "Sydney",
      "Sydney is the largest metropolitan area in Italy and the second largest municipality in Italy for p",
      "300€",
      "img/sydney.jpg"));
  Viajes.push(viaje(8,
      "Grecia",
      "Grecia is the largest metropolitan area in Italy and the second largest municipality in Italy for p",
      "300€",
      "img/grecia.jpg"));
var tarjetas ;

if (Viajes.length%3==0) {
  tarjetas = Viajes.length/3;
}else {
  tarjetas = Math.floor(Viajes.length/3);
  tarjetas++;
}
tarjetas--;


var cuenta = 0;
var eq = 0;

var padre = $("#myCarousel .carousel-inner");
var cont1  = '<div class="item carousel-item  vuelos "><div class="row" id="ContDeals"></div><div>';
$(tarjetas).each(function(index, el) {

  $(padre).append(cont1);
});
for (var i = 0; i < Viajes.length; i++) {
  if (cuenta==3) {
    eq++;
    $("ol.carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+eq+'"></li>');
    cuenta=0;
  }
  var obj = '<div class="col-sm-4 "><div class="thumb-wrapper"><div class="img-box"><img src="'+Viajes[i]["imagen"]+'" class="img-responsive img-fluid" alt></div><div class="thumb-content"><h4 id="">'+Viajes[i]["city"]+'</h4><p id="">'+Viajes[i]["description"]+'<p><a href="'+"deal.html?deal="+Viajes[i]["id"]+'" class="btn btn-primary" class="verMas2">More <i class="fa fa-angle-right"></i></a></div></div></div>';
  $(".vuelos:eq("+eq+") #ContDeals").append(obj);

    cuenta++;
}
// Viajes[i]["price"]

});
function precios(){
  if (!login) {
    $(".precios1").hide();
    $(".precios2").html('<i class="fa fa-question"></i>');
    $(".precios2").show();


  }else {
    $(".precios1").show();
    $(".precios2").hide();

  }
}
