const submit = document.querySelector("#submit");
const names = document.querySelector("#caption");
const ref = document.querySelector("#title");
const display = document.querySelector("#enterName");
const intro = document.querySelector(".intro");
const invalid = document.querySelector(".inval")

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let nameSur = names.value;
    let reference = ref.value;

    if(nameSur && reference == "TFG617323" || reference == "TFG132157"){
        display.innerHTML = nameSur;
        nameSur = "";
        reference = "";
        intro.style.display = "block";
    
    }else{
        invalid.style.opacity = "1";
        setTimeout(fade,3000)
        
    }

    function fade(){
        invalid.style.opacity = "0";
    }

})