// HEADER IMAGE

const hdrImg = document.querySelector("#headerImg");
hdrImg.addEventListener("mouseover", ev => {
    hdrImg.style.width = "90%";
    hdrImg.style.margin = "0 5% 0"
});

hdrImg.addEventListener("mouseout", ev => {
    hdrImg.style.width = "100%";
    hdrImg.style.margin = "0"
});

// MINIGAME

document.addEventListener("click", clickCheck);
document.addEventListener("keydown", moveStart);
document.addEventListener("keyup", moveEnd);

function clickCheck(ev) {
    if (ev.target == gameBound) {
        if (gameOn) {return};
        turnOn();
    } else {
        turnOff();
    }
};

let gameOn = false;

const gameBound = document.querySelector(".gameImg");

const mario= {
    elem: document.querySelector("#itsAMe"),
    x: 40,
    y: 00,
}

function turnOn (){
    mario.elem.style.display = "block"
    document.body.style.overflow = "hidden"
    gameOn = true;
};

function turnOff (){
    mario.elem.style.display = "none";
    document.body.style.overflow = "auto"
    gameOn = false;
    mario.x = 40;
    mario.y = 0;
    mario.elem.style.bottom= (mario.y + "%");
    mario.elem.style.left= (mario.x + "%");
    gameBound.addEventListener("click", clickCheck)
};

const borderCollision = {
    u: function(m) {
        const dist = (100 - (mario.y + 20));
        if (dist < 0) {dist = 0}
        return (dist > m ? m : dist)
    },
    d: function(m) {
        const dist = (mario.y)
        if (dist < 0) {dist = 0}
        return (dist > m ? m : dist)
    },
    l: function(m) {
        const dist = (mario.x)
        if (dist < 0) {dist = 0}
        return (dist > m ? m : dist)
    },
    r: function(m) {
        const dist = (100 - (mario.x + 16))
        if (dist < 0) {dist = 0}
        return (dist > m ? m : dist)
    }
}

moveRepeat = false;

function moveStart(ev) {
    if (!gameOn) {return};
    if (moveRepeat) {return};
    moveRepeat = true;
    
    if (ev.key == 'ArrowUp') {
        mario.y += borderCollision.u(12)
    }
    else if (ev.key == 'ArrowDown') {
        mario.y -= borderCollision.d(12)
    }
    else if (ev.key == 'ArrowLeft') {
        mario.x -= borderCollision.l(12)
    }
    else if (ev.key == 'ArrowRight') {
        mario.x += borderCollision.r(12)
    }

    mario.elem.style.bottom= (mario.y + "%");
    mario.elem.style.left= (mario.x + "%")
};

function moveEnd(ev) {
    if (!gameOn) {return};
    moveRepeat = false
};

// DOUBLE CLICK FOR ADVENTURE
const advText = document.querySelector("#advText");
advText.addEventListener("dblclick", makeTextAdventurous);

function makeTextAdventurous(ev) {
    colA = Math.random() * 255
    colB = Math.random() * 255
    colC = Math.random() * 255
    advText.style.color = "rgb(" + colA + ", " + colB + ", " + colC + ")";
    advText.style.background = "rgb(" + (255 - colA) + ", " + (255 - colB) + ", " + (255 - colC) + ")";
}

// SCROLLING
const funPic = document.querySelector("#someFun");
funPic.addEventListener("wheel", makeMoreFun);

let scrollNum = 5;

function makeMoreFun(ev) {
    if (scrollNum <= 0) {
        this.removeEventListener("wheel", makeMoreFun);
    } else {
        scrollNum --;
        this.style.opacity = (scrollNum / 5);
    }
};

// BUTTON VANISH

const buttonSection = document.querySelector(".content-pick");
buttonSection.addEventListener("mouseover", buttonVanish);

function buttonVanish(ev) {
    if (!ev.target.matches(".btn")) {return};
    ev.target.style.opacity = "0";
    setTimeout(function(elem) {elem.style.visibility = "hidden"}, 1000, ev.target);
}

// NAV SHENANIGANS

const homeNav = document.querySelector("nav a:first-child");
topNav.addEventListener("focusin", navShenanigans);
topNav.addEventListener("blur", navShenanigansAlso);

function navShenanigans(ev) {
    ev.target.style.color = "red"
}

function navShenanigansAlso(ev) {
    topNav.style.color = "black"
}

