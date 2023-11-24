const inputs = document.getElementsByClassName('js-input');
const btn = document.getElementById('btn-sub');

btn.onclick = (e)=>{
    for (let i = 0; i < inputs.length - 1; i++) {
        if(inputs[i].value == ''){
            e.preventDefault();
            alert('Заполните все поля!');
            break;
        }        
    }
}

/* 

Настроить добавление поста
*/