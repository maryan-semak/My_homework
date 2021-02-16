 
// Завдання №1

const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

const content = document.getElementById("list");
const ol = document.createElement('ol');

content.append(ol);

for(let i of playList) {

    const li = document.createElement('li');
    const p = document.createElement('p');

    p.append(i.author, ' : ', i.song);
    li.append(p);
    ol.append(li);
}

// Завдання №2

const btn = document.createElement('button');
const span = document.createElement('span');
const contentModal = document.getElementById('modal-window');
span.textContent = "Відкрити";
btn.append(span);
contentModal.append(btn);

btn.addEventListener('click', () => {
    const modal = document.createElement('div')
    modal.setAttribute('id', 'modal');
    
    const modalText = document.createElement('p');
    modalText.textContent = "Ви молодець !";
    modal.append(modalText);

    const closeBtn = document.createElement('button');
    const closeBtnText = document.createElement('span');
    closeBtnText.textContent = "Закрити";
    closeBtn.append(closeBtnText);
    modal.append(closeBtn);
    contentModal.append(modal);

    btn.disabled = true;
    closeBtn.addEventListener('click', () => {
        modal.remove();
        btn.disabled = false;
    });
});

// Завдання №3

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {

    if (red.classList.contains('red')) {
        red.classList.remove('red');
        yellow.classList.add('yellow');
    } else if (yellow.classList.contains('yellow')) {
        yellow.classList.remove('yellow');
        green.classList.add('green');
    } else if (green.classList.contains('green')) {
        green.classList.remove('green');
        red.classList.add('red');
    }
    
});
