const game__map = document.querySelector(".game__map")
const timer = document.querySelector(".timer")
const start__timer = document.querySelector("#start")
const stop__timer = document.querySelector("#stop")
const reset__timer = document.querySelector("#reset")

let count = 0;
let clock;

document.addEventListener("keyup", function(e){
    if(e.keyCode === 32){
        clock = setInterval(function(){
            timer.innerHTML = `<h1>${count++}</h1>`;
        }, 1000)
    }
});

document.addEventListener("keyup", function(e){
    if(e.key === "Shift"){
        clearInterval(clock);
    }
});

document.addEventListener("keyup", function(e){
    if(e.keyCode === 17){
        timer.innerHTML = `<h1>${count = 0}</h1>`;
    }
});




start__timer.addEventListener("click", function(){
    clock = setInterval(function(){
        timer.innerHTML = `<h1>${count++}</h1>`;
    }, 1000)
});

stop__timer.addEventListener("click", function(){
    clearInterval(clock);
});

reset__timer.addEventListener("click", function(){
    timer.innerHTML = `<h1>${count = 0}</h1>`;
})

