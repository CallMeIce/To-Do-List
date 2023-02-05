window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#list-input')
    const list_el = document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value

        if(!task) {
            alert("Please add to your list");
            return;
        }

    })
})