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
    createTask('Segunda tarefa do To-Do', 'frontend', 'Criado em: 12/03/2025');
    createTask('Incrementando tarefas no To-Do', 'frontend', 'Criado em: 12/03/2025');
    createTask('Task com um texto muito grande pra ver até aonde vai, para não dar problema de responsividade e quebrar toda o card da task, colocando mais texto na task até ver onde consigo chegar e tentar quebrar, para depois ajustar', 'como a tag também é colocada pelo usuário, vou fazer um teste também colocando uma tag gigante para ver até aonde da para ir. Testando mais um pouco para ver se vai quebrar o frontend da página, até agora nada de quebrar, mas vamos ver mais agora', 'Criado em: 12/03/2025');
    createTask('Verificando até aonde vai o To-Do', 'frontend', 'Criado em: 12/03/2025');
});