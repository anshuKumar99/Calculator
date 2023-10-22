var buttons=document.querySelectorAll('.button');
var display=document.getElementById('display');
let string="";
let arr=Array.from(buttons)
arr.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.innerText=='='){
            string=eval(string);
            display.value=string;
        }
        else if(event.target.innerText=='AC'){
            string="";
            display.value=string;
        }
        else if(event.target.innerText=='DEL'){
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else{
            string=string+event.target.innerText;
            display.value=string;
        }
    });
});