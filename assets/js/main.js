cardsSection = document.querySelector('#cards');
var dados = [];
let data = 'data.json';
var request = new XMLHttpRequest();
request.open('GET', data);
request.responseType = 'json';
request.send();
request.onload = function () {
    var arquivos = request.response;
    arquivos.forEach(element => {
       dados.push(element);
       cardDay(element);
    });

}
function cardDay(element) {
    let div = document.createElement('div');
    cardsSection.appendChild(div);
    let card = `
    <div class="card ${element.title}">
        <div class="card__info">
            <div class="current-info-box">
                <span class="current__type">${element.title}</span>
                <span class="pass__pontos">...</span>
            </div>
            <div class="pass-info-box">
                <span class="current__hour">${element.timeframes.daily.current}hrs</span>
                <span class="pass__week">Last day - <span class="pass__hour">${element.timeframes.daily.previous}hrs</span></span>
            </div>
        </div>
    </div>
    `
    div.innerHTML = card;
}

function cardWeek(element) {
    let div = document.createElement('div');
    cardsSection.appendChild(div);
    card = `
    <div class="card ${element.title}">
        <div class="card__info">
            <div class="current-info-box">
                <span class="current__type">${element.title}</span>
                <span class="pass__pontos">...</span>
            </div>
            <div class="pass-info-box">
                <span class="current__hour">${element.timeframes.weekly.current}hrs</span>
                <span class="pass__week">Last day - <span class="pass__hour">${element.timeframes.weekly.previous}hrs</span></span>
            </div>
        </div>
    </div>
    `
    div.innerHTML = card;
}
function cardMonth(element) {
    let div = document.createElement('div');
    cardsSection.appendChild(div);
    card = `
    <div class="card ${element.title}">
        <div class="card__info">
            <div class="current-info-box">
                <span class="current__type">${element.title}</span>
                <span class="pass__pontos">...</span>
            </div>
            <div class="pass-info-box">
                <span class="current__hour">${element.timeframes.monthly.current}hrs</span>
                <span class="pass__week">Last day - <span class="pass__hour">${element.timeframes.monthly.previous}hrs</span></span>
            </div>
        </div>
    </div>
    `
    div.innerHTML = card;
}

dayLink = document.querySelector('#day');
weekLink = document.querySelector('#week');
monthLink = document.querySelector('#month');



dayLink.addEventListener('click',() =>{
    
    dayLink.classList.add('active');
    weekLink.classList.remove('active');
    monthLink.classList.remove('active');
    cards.innerHTML = '';
    dados.forEach(e=>{
        cardDay(e)
    })

    
})
weekLink.addEventListener('click',() =>{
    
    dayLink.classList.remove('active');
    weekLink.classList.add('active');
    monthLink.classList.remove('active');
    cards.innerHTML = '';
    dados.forEach(e=>{
        cardWeek(e)
    })
})

monthLink.addEventListener('click',() =>{

    dayLink.classList.remove('active');
    weekLink.classList.remove('active');
    monthLink.classList.add('active');
    cards.innerHTML = '';
    dados.forEach(e=>{
        cardMonth(e)
    })
})
