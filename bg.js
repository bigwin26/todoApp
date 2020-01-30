const body = document.querySelector('body');

const IMAGE_NUMBER = 3;

function paintImage(ImgNumber){
    const image = new Image();
    image.src = `images/${ImgNumber+1}.jpg`
    image.classList.add('bgImage');
    body.appendChild(image);
}

function getRandomNumber(){
    const number = Math.floor(Math.random()*IMAGE_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}
init();