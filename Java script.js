<script>
        
const submit = document.getElementById('submit');
const newTask = document.getElementById('newTask');


submit.disabled = true;


newTask.addEventListener('input', function() {
    // Enable/disable the submit button based on input
    submit.disabled = newTask.value.trim() === '';
});


document.getElementById('taskForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    
    const taskText = newTask.value.trim();

    
    const newListItem = document.createElement('li');
    newListItem.textContent = taskText;

   
    document.getElementById('taskList').appendChild(newListItem);

   
    newTask.value = '';


    submit.disabled = true;
});
</script>