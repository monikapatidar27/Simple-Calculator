
 let outputScreen = document.getElementById("outscreen");

 function display(num){
     outputScreen.value += num;
 }
 function clr(){
     outputScreen.value = "";
 }
 function cala(){
     try{
         outputScreen.value=eval(outputScreen.value);
     }
     catch(err){
         alert("Invalid");
     }
 }
function del(){
     outputScreen.value=outputScreen.value.slice(0,-1);
 }
