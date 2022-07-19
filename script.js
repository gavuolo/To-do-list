let tarefas = JSON.parse(localStorage.getItem('chaveTarefas')) || []

mostrarTarefa()
//LocalStorage
function salvarLocalStorage(){
    localStorage.setItem('chaveTarefas', JSON.stringify(tarefas))
}

function mostrarTarefa(){
    let divAdd = document.querySelector('.all-list ul')
    divAdd.innerHTML = ''
    for(let i = 0; i < tarefas.length; i++ ){
        divAdd.innerHTML +=
        `<div class="list">
            <li onclick="completarTarefa(this)">${tarefas[i]}</li>
            <span><ion-icon onclick="deletarTarefa(this)" name="trash-outline"></ion-icon>
            </span>
        </div>
        `
    }
}

function addTarefa() {
    let novaTarefa = document.querySelector('input').value;
    let divAdd = document.querySelector('.all-list ul')

    if(novaTarefa != '' && novaTarefa != undefined){
        divAdd.innerHTML += `
        <div class="list">
            <li onclick="completarTarefa(this)">${novaTarefa}</li>
            <span><ion-icon onclick="deletarTarefa(this)" name="trash-outline"></ion-icon>
            </span>
        </div>
        `

        document.querySelector('input').value = ''
        tarefas.push(novaTarefa)
        salvarLocalStorage()
    }   
}

function deletarTarefa(div){
    div.parentNode.parentNode.remove()
    tarefas.splice(div, 1)
    salvarLocalStorage()
}

function completarTarefa(div){
   div.parentNode.classList.toggle('complete')
}

function completarTodos(){
    let lista = document.querySelectorAll('div .list')
    console.log(lista)
    
    for (let i = 0; i < lista.lenght; i++){
        console.log(lista[i])
        lista[i].classList.add('complete')
    }
    
}
