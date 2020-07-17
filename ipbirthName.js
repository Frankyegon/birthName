var DD= parseInt(prompt("enter date"));

if (DD<=31) {
var MM= parseInt(prompt("enter month"));
	if (MM>12){
  alert("invalid month");}else{
  var CC= parseInt(prompt("enter cc"));
  if (CC<19){
  alert("extinct")}
  else if (CC>20){
  alert("future");
  }
  else {var YY= parseInt(prompt("enter YY"));
  } 
  }
  }
else {alert("invalid date");
}

var dayWeek =parseInt((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);
//alert(dayWeek);
 
var gender= prompt("enter your gender");
if (gender=="male"){
if (dayWeek==0){consol.log("Kwasi");}
 else if (dayWeek==1){alert("Kwadwo");}
 else if (dayWeek==2){alert("Kwabena");}
 else if (dayWeek==3){alert("Kwaku");}
 else if (dayWeek==4){alert("Yaw");}
 else if (dayWeek==5){alert("Kofi");}
 else if (dayWeek==6){alert("Kwame");}
 else {alert("invalid")}
}
else if (gender=="female"){
if (dayWeek==0){alert("Akosua");}
 else if (dayWeek==1){alert("Adwoa");}
 else if (dayWeek==2){alert("Abenaa");}
 else if (dayWeek==3){alert("Akua");}
 else if (dayWeek==4){alert("Yaa");}
 else if (dayWeek==5){alert("Afua");}
 else if (dayWeek==6){alert("Ama");}
 else {alert("invalid")}
}
else {alert("invalid gender");}


