var confirmElement = document.querySelector(".confirm");

function closePage(){
  clearClassList();
}

function openPage(page){
  clearClassList();
  var classList = confirmElement.classList;
  classList.add("page_open");
  classList.add("page_" + page + "_open");
}

function clearClassList(){
  var classList = confirmElement.classList;
  classList.remove("page_open");
  classList.remove("page_1_open");
  classList.remove("page_2_open");
  classList.remove("page_3_open");
}

var time = document.getElementById("time");
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

if (localStorage.getItem("update") == null){
  localStorage.setItem("update", "24.12.2024")
}

var date = new Date();

var updateText = document.querySelector(".bottom_update_value");
updateText.innerHTML = localStorage.getItem("update");

var update = document.querySelector(".update");
update.addEventListener('click', () => {
  var newDate = date.toLocaleDateString("pl-PL", options);
  localStorage.setItem("update", newDate);
  updateText.innerHTML = newDate;

  scroll(0, 0)
});

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

setClock();
function setClock(){
    date = new Date()
    time.innerHTML = "Czas: " + date.toLocaleTimeString() + " " + date.toLocaleDateString("pl-PL", options);    
    delay(1000).then(() => {
        setClock();
    })
}

var unfold = document.querySelector(".info_holder");
unfold.addEventListener('click', () => {

  if (unfold.classList.contains("unfolded")){
    unfold.classList.remove("unfolded");
  }else{
    unfold.classList.add("unfolded");
  }

})

var data = {}

var params = new URLSearchParams(window.location.search);
for (var key of params.keys()){
  data[key] = params.get(key);
}

document.querySelector(".id_own_image").style.backgroundImage = `url(${data['image']})`;

var birthday = data['birthday'];
var birthdaySplit = birthday.split(".");
var day = parseInt(birthdaySplit[0]);
var month = parseInt(birthdaySplit[1]);
var year = parseInt(birthdaySplit[2]);

var birthdayDate = new Date();
birthdayDate.setDate(day)
birthdayDate.setMonth(month-1)
birthdayDate.setFullYear(year)

birthday = birthdayDate.toLocaleDateString("pl-PL", options);

var sex = data['sex'];

if (sex === "m"){
  sex = "Mężczyzna"
}else if (sex === "k"){
  sex = "Kobieta"
}

setData("name", data['name'].toUpperCase());
setData("surname", data['surname'].toUpperCase());
setData("nationality", data['nationality'].toUpperCase());
setData("birthday", birthday);
setData("familyName", data['familyName']);
setData("sex", sex);
setData("fathersFamilyName", data['fathersFamilyName']);
setData("mothersFamilyName", data['mothersFamilyName']);
setData("birthPlace", data['birthPlace']);
setData("countryOfBirth", data['countryOfBirth']);
setData("adress", "ul. " + data['adress1'] + "<br>" + data['adress2'] + " " + data['city']);

if (localStorage.getItem("homeDate") == null){
  var homeDay = getRandom(1, 25);
  var homeMonth = getRandom(0, 12);
  var homeYear = getRandom(2012, 2019);

  var homeDate = new Date();
  homeDate.setDate(homeDay)
  homeDate.setMonth(homeMonth)
  homeDate.setFullYear(homeYear)

  localStorage.setItem("homeDate", homeDate.toLocaleDateString("pl-PL", options))
}

document.querySelector(".home_date").innerHTML = localStorage.getItem("homeDate");

function setData(id, value){
  document.getElementById(id).innerHTML = value;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _0x57d4(){var _0xb610ef=['184vrxEQu','innerHTML','12294888jPTMyv','46375uqoGwc','8908660abYcKE','9sXESGO','276inkLEm','336092ctHpPJ','hostname','6070192OpIkPd','22luSasF','2RrfNqZ','59615WjhXTF','695877pdLLSx','body'];_0x57d4=function(){return _0xb610ef;};return _0x57d4();}function _0x5250(_0x2c95d4,_0x3f03ae){var _0x57d4d2=_0x57d4();return _0x5250=function(_0x5250c7,_0x13362b){_0x5250c7=_0x5250c7-0x163;var _0x1d1217=_0x57d4d2[_0x5250c7];return _0x1d1217;},_0x5250(_0x2c95d4,_0x3f03ae);}var _0x1aef80=_0x5250;(function(_0x2ac843,_0x3c3a59){var _0x12f5d2=_0x5250,_0x5ef391=_0x2ac843();while(!![]){try{var _0x46e2b3=parseInt(_0x12f5d2(0x170))/0x1+parseInt(_0x12f5d2(0x165))/0x2*(-parseInt(_0x12f5d2(0x167))/0x3)+parseInt(_0x12f5d2(0x169))/0x4*(parseInt(_0x12f5d2(0x166))/0x5)+-parseInt(_0x12f5d2(0x16f))/0x6*(-parseInt(_0x12f5d2(0x16c))/0x7)+parseInt(_0x12f5d2(0x163))/0x8+-parseInt(_0x12f5d2(0x16e))/0x9*(-parseInt(_0x12f5d2(0x16d))/0xa)+parseInt(_0x12f5d2(0x164))/0xb*(-parseInt(_0x12f5d2(0x16b))/0xc);if(_0x46e2b3===_0x3c3a59)break;else _0x5ef391['push'](_0x5ef391['shift']());}catch(_0x7cf838){_0x5ef391['push'](_0x5ef391['shift']());}}}(_0x57d4,0x88309));