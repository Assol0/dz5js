
let base = [
    {id: 1,  img: './img/image 1.png', title: 'ppp'},
]
let row = document.querySelector('.row')
base.forEach((item) =>{
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 1.png" alt="$item.subtitle"><h2 class="card__title">Syltherine</h2><h3 class="sty">Stylish cafe chair</h3> <h2 class="Rp">Rp 2.500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 2.png" alt="$item.subtitle"><h2 class="card__title">Leviosa</h2><h3 class="sty">Stylish cafe chair</h3> <h2 class="Rp">Rp 2.500.000<h2></div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 3.png" alt="$item.subtitle"><h2 class="card__title">Lolito</h2><h3 class="sty">Luxury big sofa</h3> <h2 class="Rp">Rp 7.000.000<h2></div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 4.png" alt="$item.subtitle"><h2 class="card__title">Respira</h2><h3 class="sty">Minimalist fan</h3><h2 class="Rp">Rp 500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 5.png" alt="$item.subtitle"><h2 class="card__title">Grifo</h2><h3 class="sty">Night lamp</h3><h2 class="Rp">Rp 1.500.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 6.png" alt="$item.subtitle"><h2 class="card__title">Muggo</h2><h3 class="sty">Small mug</h3><h2 class="Rp">Rp 150.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./images.png" alt="$item.subtitle"><h2 class="card__title">Pingky</h2><h3 class="sty">Cute bed set</h3><h2 class="Rp">Rp 7.000.000<h2> </div>',
    row.innerHTML += '<div class="card" id="${item.id}"><img class="card__img" src="./image 8.png" alt="$item.subtitle"><h2 class="card__title">Potty</h2><h3 class="sty">Minimalist flower pot</h3><h2 class="Rp">Rp 2.500.000<h2> </div>'
    
})