const TDContainer = document.getElementById('TD')

const todos= [
{
    id: 1,
    title:'dishes',
    description:'washing dishes'
},
{
    id: 2,
    title:'laundary',
    description:'washing clothes'
},
{
    id: 3,
    title:'groceries',
    description:'shop some stuff'
},
{
    id: 4,
    title:'cleaning',
    description:'mopping,vacuming..'
},
{
    id: 5,
    title:'gym',
    description:'work outs'
},
{
    id: 6,
    title:'shows',
    description:'watching shows'
},
{
    id: 7,
    title:'cook',
    description:'cooking  dinner'
},
{
    id: 8,
    title:'dog',
    description:'walk my dog'
},
{
    id: 9,
    title:'bills',
    description:'pay the bills'
}



]
for (const todo of todos) {
    TDContainer.innerHTML +=`
    <div class="card" id="${todo.id}">
        <h2 class="title">${todo.title}</h2>
        <p class="description">${todo.description}</p>


    </div>
    `
}

for (const todo of todos) {
    const todoEl = document.getElementById(todo.id)
    todoEl.addEventListener('click', () =>{
        todoEl.remove()
    })
}