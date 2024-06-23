function onClickEvent(){
    const el=document.createElement('p');
    el.innerText='clicke the button';
    document.querySelector('.container').appendChild(el);
}
document.querySelector('button').onClick=onClickEvent;

function time(){
    var today=new Date();
    var hour=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    document.getElementById('txt').innerHTML=hour+":"+min+":"+sec;
}

function date(){
    var today=new Date();
    var day=today.getDate();
    var month=today.getMonth();
    var year=today.getFullYear();

    if(day<10){
        day='0'+day;
    }
    if(month<10){
        month='0'+month;
    }
    document.getElementById('dat').innerHTML=month+"/"+day+"/"+year;
}

function animate(id){
    var element=document.getElementById(id);
    var textNode=element.childNodes[0];
    var text=textNode.data;

    setInterval(function()
    {
        text=text[text.length-1]+text.substring(0,text.length-1);
        textNode.data=text;
    }, 100);
}

function rand(){
    const Ran=Math.floor(Math.random()*10)+1;
    console.log(Ran);
    const user=prompt("enter a number:");
    if(Ran==user){
        alert('good');
    }else{
        alert('no good');
    }
}

function mul(){
    n1=document.getElementById("firstNumber").value;
    n2=document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML=n1*n2;
}

function div(){
    n1=document.getElementById("firstNumber").value;
    n2=document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML=n1/n2;
    
}
