var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];


function input1(){
DD = parseInt(document.getElementById("DD").value);
MM = parseInt(document.getElementById("MM").value)
CC = parseInt(document.getElementById("CC").value)
YY = parseInt(document.getElementById("YY").value)
gender = document.getElementById("gender").value

alert(DD+MM+CC+YY);

//var year = [DD,MM,CC,YY];


if(DD<1){alert("enter date higher than 1")}
if (DD){alert("Enter date less than 31")}
if (MM<1){alert("Enter month more or equal to 1")}
if (MM>12){alert("Enter month less or equal to 12");}
if (CC<19){alert("Enter CC value 19/20")}
if (CC>20){alert("Enter CC value 19/20")}

  else{alert ("code reach here")}
}
  

dayWeek =parseInt((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);
alert(dayWeek);
 
function Gender1() {


if (gender=="male"){
if (dayWeek==0){alert("You were born on "+dayNames[0]+". "+"Your Ghanaian name is "+maleNames[0]);}
 else if (dayWeek==1){alert("You were born on "+dayNames[1]+". "+"Your Ghanaian name is "+maleNames[1]);}
 else if (dayWeek==2){alert("You were born on "+dayNames[2]+". "+"Your Ghanaian name is "+maleNames[2]);}
 else if (dayWeek==3){alert("You were born on "+dayNames[3]+". "+"Your Ghanaian name is "+maleNames[3]);}
 else if (dayWeek==4){alert("You were born on "+dayNames[4]+". "+"Your Ghanaian name is "+maleNames[4]);}
 else if (dayWeek==5){alert("You were born on "+dayNames[5]+". "+"Your Ghanaian name is "+maleNames[5]);}
 else if (dayWeek==6){alert("You were born on "+dayNames[6]+". "+"Your Ghanaian name is "+maleNames[6]);}
 else {alert("invalid")}
}
else if (gender=="female"){
if (dayWeek==0){alert("You were born on "+dayNames[0]+". "+"Your Ghanaian name is "+femaleNames[0]);}
 else if (dayWeek==1){alert("You were born on "+dayNames[1]+". "+"Your Ghanaian name is "+femaleNames[1]);}
 else if (dayWeek==2){alert("You were born on "+dayNames[2]+". "+"Your Ghanaian name is "+femaleNames[2]);}
 else if (dayWeek==3){alert("You were born on "+dayNames[3]+". "+"Your Ghanaian name is "+femaleNames[3]);}
 else if (dayWeek==4){alert("You were born on "+dayNames[4]+". "+"Your Ghanaian name is "+femaleNames[4]);}
 else if (dayWeek==5){alert("You were born on "+dayNames[5]+". "+"Your Ghanaian name is "+femaleNames[5]);}
 else if (dayWeek==6){alert("You were born on "+dayNames[6]+". "+"Your Ghanaian name is "+femaleNames[6]);}
 else {alert("invalid")}
}
else {alert("invalid gender");}

}

function findName(){
  getGender1();
}
