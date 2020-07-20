var DD= parseInt(prompt("enter date(DD)"));

if (DD<1){alert("enter date higher than 0");}
else if(DD>31){alert("enter date less than 31");}
else {alert(MM);}

if (MM<1){alert("enter month higher than 0");}
else if(MM>12){alert("enter month lower than 12");}
else {alert(CC);}

if (CC<18){alert("enter century 19 or 20");}
else if(CC>19){alert("enter century 19 or 20");}
else {alert(YY);}

if (YY<0){alert("enter year as positive value");}
else if(YY>99){alert("enter year less or equal to 99");}
else {

    var dayWeek =parseInt((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);

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


}