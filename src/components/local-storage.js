export default function saveDataToLocalStorage(listTodo) {
    localStorage.setItem('todos', JSON.stringify(listTodo))
}