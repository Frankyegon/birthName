
var DD= parseInt(prompt("enter date DD (DDmmccyy)"));

if (DD<1){alert("invalid date")}
else if (DD<=31) {
var MM= parseInt(prompt("enter month MM (ddMMccyy)"));
  if (MM<1){alert("invalid month")}
  else if (MM>12){
  alert("invalid month");}else{
  var CC= parseInt(prompt("enter century CC (ddmmCCyy)"));
  if (CC<19){
  alert("invalid century")}
  else if (CC>20){
  alert("future centure. Please enter again");
  }
  else {var YY= parseInt(prompt("enter year YY (ddmmccYY)"));
  }
  }
  }
else {alert("invalid date of birth");
}

var dayWeek =parseInt((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);
//alert(dayWeek);
 
var gender= prompt("enter your gender");
if (gender=="male"){
if (dayWeek==0){consol.log("Your Ghanaian name is Kwasi");}
 else if (dayWeek==1){alert("Your Ghanaian name is Kwadwo");}
 else if (dayWeek==2){alert("Your Ghanaian name is Kwabena");}
 else if (dayWeek==3){alert("Your Ghanaian name is Kwaku");}
 else if (dayWeek==4){alert("Your Ghanaian name is Yaw");}
 else if (dayWeek==5){alert("Your Ghanaian name is Kofi");}
 else if (dayWeek==6){alert("Your Ghanaian name is Kwame");}
 else {alert("invalid")}
}
else if (gender=="female"){
if (dayWeek==0){alert("Your Ghanaian name is Akosua");}
 else if (dayWeek==1){alert("Your Ghanaian name is Adwoa");}
 else if (dayWeek==2){alert("Your Ghanaian name is Abenaa");}
 else if (dayWeek==3){alert("Your Ghanaian name is Akua");}
 else if (dayWeek==4){alert("Your Ghanaian name is Yaa");}
 else if (dayWeek==5){alert("Your Ghanaian name is Afua");}
 else if (dayWeek==6){alert("Your Ghanaian name is Ama");}
 else {alert("invalid")}
}
else {alert("invalid gender");}

    

