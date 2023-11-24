// ICS 2203 - Internet Apllication Programming;
// ToDo LIST assignment;

/*
GROUP MEMBERS;
SCT211-0061/2022 - Joseph Amuyunzu;
SCT211-0023/2022 - Teddy Muli;
SCT211-0022/2022 - Adrian Baraka;
SCT211-0869/2022 - Jacob Kasunzu John;
SCT211-0032/2022 - Benedict Waweru;
SCT211-0581/2021- Serena Mumbi Kimiri;
 
*/
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
