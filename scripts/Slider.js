const toPrices = document.getElementById('toPrices');
const list = ['img/negative-space-thumb-alvaro-serrano-come-in-we-are-open-sign-1.jpg', 'img/negative-space-thumb-matt-jones-thank-you-sign-1.jpg', 'img/negative-space-closed-sign-vintage-glass-door-kaique-rocha-thumb-1.jpg'];
let pos = 0;

class Slider {
    constructor(sliderId){
        this.sliderId = sliderId;
    }

    createSlider(imgList) {
        imgList = list;
        let div = document.createElement('div');
        div.id = this.sliderId;
        let prevBtn = document.createElement('img');
        prevBtn.className = 'slider__Btn slider__Btn--prev';
        prevBtn.id = 'prev';
        prevBtn.src = 'img/back_arrow_icon.png';
        let nextBtn = document.createElement('img');
        nextBtn.className = 'slider__Btn slider__Btn--next';
        nextBtn.id = 'next';
        nextBtn.src = 'img/forward_arrow_icon.png';
        let dot_div = document.createElement('div');
        dot_div.className = 'dot_div';

        list.map((value, index) => {
            let img = document.createElement('img');
            img.src = value;
            img.id = `slider_img_${index}`;
            img.className = 'slider__img inactiva';
            let span = document.createElement('span');
            span.className = 'dot';
            span.id = `dot_${index}`;
            div.append(img);
            dot_div.append(span);
        })

        
        div.append(prevBtn);
        div.append(nextBtn);
        div.append(dot_div);

        toPrices.insertAdjacentElement('afterend', div)
    }
}

const slider =  new Slider('slider');
slider.createSlider(list);

let img_principal = document.getElementById(`slider_img_${pos}`);
img_principal.className = 'activa';
// console.log(img_principal)

const next = document.getElementById('next');
const prev = document.getElementById('prev');
let dot = document.getElementById(`dot_${pos}`);

window.addEventListener('load', () => {
    setInterval(() => {
        dot.style.padding = '0';
        dot.style.opacity = '7';
        pos++;
        if(pos >= list.length) {
            pos = 0;
        }
        img_principal.src = list[pos];
        dot = document.getElementById(`dot_${pos}`);
        dot.style.padding = '0.3em';
        dot.style.opacity = '1';
    }, 5000);
});

// dot.addEventListener('click', () => {
    
// });

next.addEventListener('click', function next_img(){
    dot.style.padding = '0';
    dot.style.opacity = '7';
    pos++;
    if(pos >= list.length) {
        pos = 0;
    }
    img_principal.src = list[pos];
    dot = document.getElementById(`dot_${pos}`);
    dot.style.padding = '0.3em';
    dot.style.opacity = '1';
});

prev.addEventListener('click', function prev_img() {
    dot.style.padding = '0';
    dot.style.opacity = '7';
    pos--;
    if(pos < 0) {
        pos = list.length-1;
    }
    img_principal.src = list[pos];
    dot = document.getElementById(`dot_${pos}`);
    dot.style.padding = '0.3em';
    dot.style.opacity = '1';
});

