let createTask = (titleText, tagText, dateText) => {
    let list = document.querySelector('#todo-list');


    let toDo = document.createElement('li');
    let titleToDo = document.createElement('h3');
    let tagToDo = document.createElement('p');
    let date = document.createElement('p');
    let button = document.createElement('button');
    button.textContent = 'Concluir';
    
    let divText = toDo.appendChild(document.createElement('div'));
    divText.appendChild(titleToDo);
    let divTagDate = divText.appendChild(document.createElement('div'));
    divTagDate.appendChild(tagToDo);
    divTagDate.appendChild(date);
    toDo.appendChild(button);
    list.appendChild(toDo);

    toDo.className = 'todo';
    divText.className = 'text-todo';
    divTagDate.className = 'tag-date';
    tagToDo.className = 'tag';
    date.className = 'date';

    titleToDo.textContent = titleText;
    tagToDo.textContent = tagText;
    date.textContent = dateText;
}

window.addEventListener('load', function() {
    createTask('Implementando as tarefas no To-Do', 'backend', 'Criado em: 12/03/2025');
});