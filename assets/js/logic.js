// coding for lightmode
const modeSwitch = document.querySelector('#modeSwitch');
const page = document.querySelector('.page');


let mode = "light";
let button = document.getElementById('modeSwitch');
button.style.backgroundImage = "url('./assets/img/sun.png')";

modeSwitch.addEventListener('click', function(){
    console.log(mode)
    if (mode === 'light'){
        mode = 'dark';
        page.setAttribute('class', 'dark');
        // let button = document.getElementById('modeSwitch');
        button.style.backgroundImage = "url('./assets/img/moon.png')";
        // document.getElementById('#modeSwitch').style.backgroundImage = "url(./assets/img/moon.png)";
        // .src = "./assets/img/moon.png"
        console.log('3');
    }

    else{
        mode = 'light';
        page.setAttribute('class', 'light');
        // let button = document.getElementById('modeSwitch');
        button.style.backgroundImage = "url('./assets/img/sun.png')";
        // document.getElementById('#modeSwitch').style.backgroundImage = "url(./assets/img/sun.png)";
        // .src = "./assets/img/sun.png"
        console.log('4');
    }
    console.log('5');
});