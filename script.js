let tarefas = JSON.parse(localStorage.getItem('chaveTarefas')) || []
let tarefasConcluidas = JSON.parse(localStorage.getItem('chaveConcluidas')) || []
mostrarTarefa()

//LocalStorage
function salvarLocalStorage(){
    localStorage.setItem('chaveTarefas', JSON.stringify(tarefas))

    localStorage.setItem('chaveConcluidas', JSON.stringify(tarefasConcluidas))
}

//Quantidade de tarefas
function totalTarefas(){
    document.querySelector('h1').innerHTML = `Lista de tarefas(${tarefas.length})`
}

//Mostrar as tarefas salvar no localStorage
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
        totalTarefas()
    }
}

//Adicionar tarefa
let textoTarefa = document.querySelector('input')
    textoTarefa.addEventListener("keypress", function(evento){
       if(evento.keyCode === 13){
        addTarefa()
       }
    })

function addTarefa() {
    let novaTarefa = document.querySelector('input').value;
    let divAdd = document.querySelector('.all-list ul')
    if(novaTarefa != '' && novaTarefa != undefined){
        divAdd.innerHTML += `
        <div onclick="completarTarefa(this)" class="list">
            <li>${novaTarefa}</li>
            <span><ion-icon onclick="deletarTarefa(this)" name="trash-outline"></ion-icon>
            </span>
        </div>
        `
        document.querySelector('input').value = ''
        tarefas.push(novaTarefa)
        console.log(tarefas)
        totalTarefas()
        salvarLocalStorage()
    }   
}

//Deletar a tarefa
function deletarTarefa(div){
    if(window.confirm("Você quer mesmo deletar esta terafa?")){
        div.parentNode.parentNode.remove()
        tarefas.splice(div, 1)
        totalTarefas()
        salvarLocalStorage()
    }
}

//Adicionar o efeito de "tarefa completada"
function completarTarefa(div){
    div.classList.toggle('complete')
    salvarLocalStorage()
}

//Botão de completar todas as tarefas
function completarTodos(){
    
    let lista = document.querySelectorAll('div .list')
    for(let i = 0; i < lista.length; i++){
        lista[i].classList.toggle('complete')
    }
}

//Botão deletar todas as tarefas
function deletarTodas(){
    
    if(window.confirm("Você quer mesmo deletar todas as tarefas?")){
        let lista = document.querySelectorAll('.list')
        console.log(lista)
        for(let i = 0; i < lista.length; i++){
            lista[i].remove()
            tarefas.pop([i])
            salvarLocalStorage()
            totalTarefas()
        }

    }   
}  
