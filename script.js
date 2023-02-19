alert(" WELCOME TO INDIA")
let stateData=[
   {"state":"tamilnadu",
 "area":" 1,30,058 Sq. Kms",
 "capital":"Chennai",
 "language":"Tamil",
 "population":"7,21,47,030"
},
{"state":"andhrapradesh",
"area":" 2,75,068 Sq. Kms",
"capital":"Hyderabad",
"language":"Telugu",
"population":"7,57,27,541"
},
{"state":"chattisgarh",
"area":" 1,35,192 Sq. Kms",
"capital":"Raipur",
"language":"Chhattisgarhi",
"population":"2,55,45,198"
},
{"state":"goa",
"area":" 3,702 Sq. Kms ",
"capital":"Panaji",
"language":"Konkani",
"population":"14,58,545"
},
{"state":"gujarat",
"area":" 1,96,024 Sq. Kms",
"capital":"Gandhinagar",
"language":" Gujarati",
"population":"  6,04,39,692"
},
{"state":"karnataka",
"area":" 1,91,791 Sq. Kms",
"capital":"Bangalore",
"language":" Kannada",
"population":"6,10,95,297"
},
{"state":"kerala",
"area":"38,863 Sq. Kms",
"capital":"Thiruvananthapuram",
"language":" Malayalam",
"population":"3,34,06,061"
},
{"state":"madhyapradesh",
"area":"3,08,245 Sq. Kms",
"capital":"Bhopal",
"language":" Hindi",
"population":" 8,65,90,000"
},
{"state":"maharashtra",
"area":"3,07,713 Sq. Kms",
"capital":"Mumbai",
"language":"  Marathi,Hindi",
"population":"  11,23,74,333"
},
{"state":"orissa",
"area":"1,55,707 Sq. Kms",
"capital":"Bhubaneswar",
"language":"  Oriya",
"population":"  41,974,218"
},
{"state":"rajasthan",
"area":" 3,42,239 Sq. Kms",
"capital":"Jaipur",
"language":"  Rajasthani",
"population":"   7,82,30,816"
},
{"state":"uttarpradesh",
"area":" 2,43,286 Sq. Kms",
"capital":"Lucknow",
"language":" Hindi,Urdu",
"population":"19,98,12,341"
},
]


let display=document.getElementById("mapData");




function show(d){
   
let index;
for(let i=0;i<stateData.length;i++){
    if(stateData[i].state===d){
        index=i;
    }
}
let stateName=stateData[index].state
let upperStateName=stateName.toUpperCase()
let innerHtmlContent;
innerHtmlContent="<h2>"+upperStateName+"</h2>"
innerHtmlContent+="<ul><li> <span> Capital: </span> "+stateData[index].capital +"</li>";
innerHtmlContent+="<li><span>Language: </span>"+stateData[index].language +"</li>";
innerHtmlContent+="<li><span>Area:</span> "+stateData[index].area +"</li>";
innerHtmlContent+="<li><span>Population:</span> "+stateData[index].population +"</li>";
display.innerHTML=innerHtmlContent;







}