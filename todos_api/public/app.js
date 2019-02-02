// GET all todos from JSON API
/* global $ */ //needed to omit linting errors via '$'
$(document).ready(() => {
    // retrieves todos
    $.getJSON('/api/todos')
        .then(addTodos);

    // creates todo when enter key pressed
    $('#todoInput').keypress( e => {
        if (e.which == 13) {
            createTodo();
        }
    });
    
    // marks todo completed
    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    });
    
    // deletes todo when click 'x'
    $('.list').on('click', '.deleteTodo', function(e) {
        e.stopPropagation();
        deleteTodo($(this).parent());
    });
});

function addTodos(todos) {
    todos.forEach( todo => addTodo(todo));
}

function addTodo(todo) {
    
    // creates new todo
    const newTodo = $(` <li class="list-item">
                            <span class="list-item-text">
                            <span class="list-item-completed">></span>
                            <span class="list-item-text-inner">${todo.name}</span>
                            </span>
                            <span class="deleteTodo">x</span>
                            <span class="loadingDelete">...</span>
                        </li>`
                    );

    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);

    // checks completed todos
    if(newTodo.completed) {
        newTodo.addClass('done');
    }

    $('.list').append(newTodo);
}

function createTodo() {
    let userInput = $('#todoInput').val();
    
    // if string is empty, do nothing 
    if (!userInput) {
        return;
    }
    
    $.post('/api/todos', {name: userInput})
    .then((newTodo) => {
        $('#todoInput').val('');
        addTodo(newTodo)
    })
    .catch( err => console.log(err));
}

function updateTodo(todo) {
    // let item = todo.find('.list-item-text');
    // todo.data('completed', item.hasClass('done'));
    
    // (function() {
    //     todo.data('completed') ? this.show() : this.hide();
    // }).bind(item.find('.list-item-completed'))();
    
    // TODO: When the todo list item reloads,
    // the completed line-through doesn't persist.
    
    let updateUrl = '/api/todos/' + todo.data('id');
    let isDone = !todo.data('completed');
    let updateData = {completed: isDone};
    
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo) {
        todo.toggleClass('done');
        todo.data('completed', isDone)
    });
}

function deleteTodo(todo) {
    let clickedId = todo.data('id');
    let deleteUrl = '/api/todos/' + clickedId;

    // toggles the 'x' and '...'
    // for deleting todo
    todo.find('.deleteTodo').toggle();
    todo.find('.loadingDelete').toggle();

    // deletes todo in DB
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(() => { 
        // deletes todo on UI
        todo.remove();
    })
    .catch( err => console.log(err));
}