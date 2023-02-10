let display = document.querySelector("#value");
const btnGroup= document.querySelectorAll(".btn")

let value = 0;
btnGroup.forEach((btn)=>{
    
    btn.addEventListener("click",function(e){
       
        let target = e.currentTarget.classList;
        if(target.contains("decress")){
            value --;
            
        }
        else if(target.contains("incress")){
            value ++
           
        }
        else if(target.contains("reset")){
            value= 0
            
        } 
        if(value>0){
            display.style.color="green"
        }
        else if(value<0){
            display.style.color="red"
        }else{
            display.style.color="black"
        }
        display.textContent = value
    })

   
})
