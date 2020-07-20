function output(e){
event.preventDefault();

var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var Date = parseInt(document.getElementById("DD").value);
var Month = parseInt(document.getElementById("MM").value);
//const Cent = parseInt(document.getElementById("CC").value)
var Year = document.getElementById("YY").value;
var sex = document.getElementById("gender").value;

var Cent = parseInt(Year.slice(0,2));
var Yeaar = parseInt(Year.slice(2,4));

var dayWeek =Math.floor(((((Cent/4)-2*Cent-1)+((5*Yeaar/4))+((26*(Month+1)/10))+Date)%7));
//alert(dayWeek);
if (sex=="male"){
  if (dayWeek==0){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[0]+". "+"Your Ghanaian name is "+maleNames[0]);}
   else if (dayWeek==1){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[1]+". "+"Your Ghanaian name is "+maleNames[1]);}
   else if (dayWeek==2){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[2]+". "+"Your Ghanaian name is "+maleNames[2]);}
   else if (dayWeek==3){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[3]+". "+"Your Ghanaian name is "+maleNames[3]);}
   else if (dayWeek==4){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[4]+". "+"Your Ghanaian name is "+maleNames[4]);}
   else if (dayWeek==5){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[5]+". "+"Your Ghanaian name is "+maleNames[5]);}
   else if (dayWeek==6){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[6]+". "+"Your Ghanaian name is "+maleNames[6]);}
   else {document.getElementById("outpuuut").innerHTML=("invalid")}
  }
  else if (sex=="female"){
  if (dayWeek==0){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[0]+". "+"Your Ghanaian name is "+femaleNames[0]);}
   else if (dayWeek==1){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[1]+". "+"Your Ghanaian name is "+femaleNames[1]);}
   else if (dayWeek==2){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[2]+". "+"Your Ghanaian name is "+femaleNames[2]);}
   else if (dayWeek==3){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[3]+". "+"Your Ghanaian name is "+femaleNames[3]);}
   else if (dayWeek==4){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[4]+". "+"Your Ghanaian name is "+femaleNames[4]);}
   else if (dayWeek==5){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[5]+". "+"Your Ghanaian name is "+femaleNames[5]);}
   else if (dayWeek==6){document.getElementById("outpuuut").innerHTML=("You were born on "+dayNames[6]+". "+"Your Ghanaian name is "+femaleNames[6]);}
   else {document.getElementById("outpuuut").innerHTML=("invalid")}
  }
  else {document.getElementById("outpuuut").innerHTML=("invalid gender");}
  
  
}