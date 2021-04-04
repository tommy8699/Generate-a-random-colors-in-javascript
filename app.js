//Tu si vytvaram <div> s classom box a vkladam si ich hlavneho div
// Vyuzivam cyklus for loop
for (let i = 1; i<=100; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.box-container').appendChild(box);
}

const btn = document.querySelector('.btn'),
      randomColorBlock = document.querySelectorAll('.box');

// tu si vyrabam nahodne farby
function RandomHexColor(){
    let chars = "0123456789abcdef";
    let colorLength = 6;
    let color = "";

    for(let i =0; i<colorLength; i++){
        let RandomColor = Math.floor(Math.random() * chars.length );
        color += chars.substring(RandomColor,RandomColor+1);
    }
    return "#"+color;
}

function addColor(){
    randomColorBlock.forEach(e =>{
        let newColor = RandomHexColor();
        e.style.backgroundColor = newColor; //tu pridame elementom farbu pozadia
        e.innerHTML = newColor;     // tu vkladame text farby do elementu
    })
}

//Po kliknuti na farbu sa skopiruje hex farby #------ do clipboard
let divs = document.querySelectorAll('.box');
for (let div of divs) {
    div.onclick = function () {
        document.execCommand('copy');
    }

div.addEventListener('copy',function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData('text/plain', div.textContent);
        console.log(event.clipboardData.getData('text'))
    }
});
}