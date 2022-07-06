const count=document.querySelector('.count');
const buttons=document.querySelector('.buttons');
//this is selecting the whole container holding the individual buttons so you can use it's individual buttons

//EVENT DELEGATION
buttons.addEventListener("click" , (e)=>{
    if (e.target.classList.contains("increase")){
        count.innerHTML++;
        setColor();
    }
    else if (e.target.classList.contains("decrease")){
        count.innerHTML--;
        setColor();
    //    means if the event target contains the given classList name.
    }
    else if(e.target.classList.contains("reset")){
        count.innerHTML= 0;
        setColor();
    }
});

function setColor(){
    if (count.innerHTML>0){
        count.style.color="yellow";
    }
    else if(count.innerHTML<0){
        count.style.color="red";
    }else {
        count.style.color="white";
    }

}

/* You are not required to initialize the variables increase, decrease and reset
because that is done in the event delegation using classList. This method helps
in code optimization.
* */