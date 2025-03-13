const renderTaskList = () => {
    const list = document.querySelector('#todo-list');

    list.innerHTML = '';

    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task) => {
        const toDo = document.createElement('li');
        const title_ToDo = document.createElement('h3');
        const tagToDo = document.createElement('p');
        const date = document.createElement('p');
        const taskId = `${task.id}-task`;

        const divText = document.createElement('div');
        const divTagDate = document.createElement('div');

        divText.appendChild(title_ToDo);
        divTagDate.appendChild(tagToDo);
        divTagDate.appendChild(date);
        divText.appendChild(divTagDate);
        toDo.appendChild(divText);

        toDo.className = 'todo';
        divText.className = 'text-todo';
        divTagDate.className = 'tag-date';
        tagToDo.className = 'tag';
        date.className = 'date';

        if (task.completed) {
            const completed = document.createElement('img');
            completed.src = './assets/check.svg';
            toDo.appendChild(completed);
        } else {
            const button = document.createElement('button');
            button.textContent = 'Concluir';
            button.addEventListener('click', () => {
                const updatedTasks = tasks.map((t) =>
                    t.id === task.id ? { ...t, completed: true } : t
                );

                setTasksInLocalStorage(updatedTasks);
                renderTaskList();
            });
            toDo.appendChild(button);
        }

        toDo.id = taskId;
        title_ToDo.textContent = task.title;
        tagToDo.textContent = task.tag;
        date.textContent = task.date;

        list.appendChild(toDo);
    });
};

const getNewTaskData = (event) => {
    const id = getNewTaskId();
    const title = event.target.elements.title.value;
    const tag = event.target.elements.tag.value;
    const now = new Date();
    const formattedDate = `Criado em: ${now.toLocaleDateString('pt-BR')}`;
    const tasks = getTasksFromLocalStorage();

    return { id, title, tag, formattedDate, tasks };
}

const createTask = (event) => {
    event.preventDefault();

    const newTaskData = getNewTaskData(event);
    const tasks = getTasksFromLocalStorage();
    const id = getNewTaskId();
    
    const updatedTasks = [
        ...tasks, 
        {
            id: newTaskData.id,
            title: newTaskData.title,
            tag: newTaskData.tag,
            date: newTaskData.formattedDate,
            completed: false,
        }
    ];
    
    setTasksInLocalStorage(updatedTasks);

    document.getElementById('title').value = '';
    document.getElementById('tag').value = '';

    renderTaskList();
}

const setTasksInLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasksFromLocalStorage = () => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'));
    
    return Array.isArray(localTasks) ? localTasks : [];
}

const getNewTaskId = () => {
    const tasks = getTasksFromLocalStorage()
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
}

window.onload = function() {
    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);
    
    const tasks = getTasksFromLocalStorage();
    
    renderTaskList();
};