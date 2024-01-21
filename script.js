
var inp = document.getElementById("inp");
var para = document.getElementById('para');
var btn = document.getElementById('btn');
var text;

function submit() {
    text = inp.value;

    if (text.length > 50) {
        para.innerText = text.slice(0, 50);
        btn.style.display = 'block';
    } else {
        para.innerText = text;
    }

    para.style.display = 'block';
}

function lessmore() {
    if (para.innerText.length > 50) {
        para.innerText = para.innerText.slice(0, 50);
        btn.innerText = "See more";
    } else {
        para.innerText = text;
        btn.innerText = "See less";
    }
}

