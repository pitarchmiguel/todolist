import './style.css'

const textInput = document.querySelector('#new-todo')
const addButton = document.querySelector('#add-todo')

addButton.addEventListener('click', () => {
  const text = textInput.value
  if (text) {
    const todoItem = document.createElement('li')
    todoItem.textContent = text
    document.querySelector('#todo-list').appendChild(todoItem)
    textInput.value = ''
  }
}
)