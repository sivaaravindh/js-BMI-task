function wieht(){
    var age=parseInt(document.getElementById("age").value); 
    var hei = parseInt(document.getElementById("hieght").value);
    var wei = parseInt(document.getElementById("weight").value);
    
    var bmi=((wei/hei/hei)*10000);
    let elemtnt=document.getElementById("con");
    elemtnt.style.textAlign="center";

    if (bmi < 18.5) {
      elemtnt.style.color="yellow";
      document.getElementById("con").innerText=" Under weight ";
      console.log("your bmi is" + bmi  );
      } 
      else if (bmi >= 18.5 && bmi <= 25.9) {
        elemtnt.style.color = "green";
        document.getElementById("con").innerText=" normal weight ";
        console.log("your bmi is" +bmi  );
      }
    else{
      elemtnt.style.color= "red";
      document.getElementById("con").innerText=" over wigth ";
      console.log("your bmi is" +bmi  );
    }
    }



