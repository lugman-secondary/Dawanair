
 function  viaje(id,city,description,price,temp,duracion,calidad,img,date,compa,horaS,horaLL,disponibles,origen,tipo,clase) {
   return{
    "id":id,
    "city":city,
    "description":description,
    "price":price,
    "temperatura":temp,
    "duracion":duracion,
    "estrellas":calidad,
    "imagen":img,
    "fecha":date,
    "compa":compa,
    "salida":horaS,
    "llegada":horaLL,
    "disponibles":disponibles,
    "origen":origen,
    "tipo":tipo,
    "clase":clase
  }
  };
var ViajesEnteros = [];
ViajesEnteros.push(viaje(
  1,
  "Moscow",
  "Moscú es la capital y la entidad federal más poblada de Rusia. La ciudad es un importante centro político, económico, cultural y científico de Rusia y del continente",
  "360€",
  "Low",
  "2 Hours",
  3,
  "img/moscow.jpg",
  "12/12/2017",
  ["ae","ana"],
  "16:30pm",
  "18:30pm",
  "7",
  "Valencia(Spain)",
  "One way",
  "Economic"
));
ViajesEnteros.push(viaje(2,
  "Hawai",
  "Hawái​ es uno de los cincuenta estados que, junto con Washington D. C., forman los Estados Unidos de América. Su capital y ciudad más poblada es Honolulu.",
  "570€",
  "Low",
  "3 Hours",
  4,
  "img/hawai.jpg",
  "12/22/2017",
 ["ae"],
 "16:30pm",
 "18:30pm",
 "4",
 "Barcelona(Spain)",
   "One way",
   "Bunisses"
));
ViajesEnteros.push(viaje(3,
  "Milan",
  "Milán ​ es la mayor Área Metropolitana de Italia y el segundo municipio de Italia por población, capital de la Ciudad metropolitana de Milán.",
  "400€",
  "Low",
  "4 Hours",
  1,
  "img/milan.jpg",
  "1/12/2018",
 ["ana"],
 "16:30pm",
 "18:30pm",
 "67",
 "Barcelona(Spain)",
   "One way",
   "Economic"

));
ViajesEnteros.push(viaje(4,
  "France",
  "Milán ​ es la mayor Área Metropolitana de Italia y el segundo municipio de Italia por población, capital de la Ciudad metropolitana de Milán.",
  "400€",
  "Low",
  "4 Hours",
  1,
  "img/paris.jpeg",
  "12/18/2017",
  ["ae"],
  "16:30pm",
  "18:30pm",
  "20",
  "Valencia(Spain)",
  "One way",
  "Bunisses"

));
ViajesEnteros.push(viaje(5,
  "Dubai",
  "Milán ​ es la mayor Área Metropolitana de Italia y el segundo municipio de Italia por población, capital de la Ciudad metropolitana de Milán.",
  "400€",
  "Low",
  "4 Hours",
  1,
  "img/dubai.png",
  "12/25/2017",
  ["ae","ana"],
  "16:30pm",
  "18:30pm",
  "20",
  "Valencia(Spain)",
  "One way",
  "First"
));
ViajesEnteros.push(viaje(6,
  "Giza",
  "Milán ​ es la mayor Área Metropolitana de Italia y el segundo municipio de Italia por población, capital de la Ciudad metropolitana de Milán.",
  "400€",
  "Low",
  "4 Hours",
  1,
  "img/giza.png",
  "12/12/2017",
  ["ae"],
  "16:30pm",
  "18:30pm",
  "2",
  "Valencia(Spain)",
  "round trip",
  "Economic"

));
ViajesEnteros.push(viaje(7,
  "Sydney",
  "Milán ​ es la mayor Área Metropolitana de Italia y el segundo municipio de Italia por población, capital de la Ciudad metropolitana de Milán.",
  "400€",
  "Low",
  "4 Hours",
  1,
  "img/sydney.jpg",
  "2/12/2018",
  ["ae","iberia"],
  "16:30pm",
  "18:30pm",
  "2",
  "Valencia(Spain)",
  "round trip",
  "First"

));
ViajesEnteros.push(viaje(8,
  "Grecia",
  "Milán ​ es la mayor Área Metropolitana de Italia y el segundo municipio de Italia por población, capital de la Ciudad metropolitana de Milán.",
  "400€",
  "Low",
  "4 Hours",
  1,
  "img/grecia.jpg",
  "1/12/2019",
  ["ae"],
  "16:30pm",
  "18:30pm",
  "90",
  "Madrid(Spain)",
  "round trip",
  "Economic"

));
// console.log("JSON.parse(): "+JSON.stringify(ViajesEnteros[0]));

$("document").ready(function () {
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
var parameter = getUrlParameter("deal");

var deal = ""

$(ViajesEnteros).each(function(index, el) {
  if (el["id"]==parameter) {
    deal = el;
  }
});
$("#Reservame").click(function(){
  window.location = "comprar.html"+"?ide="+deal["id"];
});

$(".Tit").text(deal["city"]);
$(".desc").text(deal["description"]);
$("#price").text(deal["price"]);
$("#temp").text(deal["temperatura"]);
$("#time").text(deal["duracion"]);
$("#ClaseObj").text("Travel date: "+deal["fecha"]);
$("#FechaObj").text("Class: "+deal["clase"]);
$("#Hora1Obj").text("Departure time: "+deal["salida"]);
$("#Hora2Obj").text("Arrival time:"+deal["llegada"]);
var estr = deal["estrellas"];
console.log(estr);
var imgS = '<img src="img/star.ico" alt="">';
var imgS2 = '<img src="img/no-star.png" alt="">';
for (var i = 0; i < 5; i++) {
  if (i<estr) {
    $(".stars").append(imgS);
  }else {
    $(".stars").append(imgS2);
  }
}
$(".imgPrincipal").attr("src",deal["imagen"]);


});
