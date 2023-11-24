# ICS 2203 - Internet Application Programming

## ToDO List Assignment;
> `JavaScript`  
> 
>> Read the instructions below for the tasks to be done *in a group*.  

`Lecturer's prompt`:  
TODO `List`: Assignment – create JS to accomplish the following:
- Query for the `submit` button and input task field once in the beginning and store those two values in the variables submit and newTask.
- Disable the `submit` `<button>` by default. Enable/disable by setting its `disabled` attribute to `false/true`.
- Listen for `input` to be typed into the input field
- Listen for submission of `form`
- Find the task the user just submitted.
- Create a `list` item for the new task and add the task to it
- Add new element to our *unordered list* - `ul`.
- At the end of the script, add the line return false. This prevents the default submission of the form which involves either reloading the current page or redirecting to a new one.  
**Note**: create `HTML` elements using the `createElement` function. Add the elements to the `DOM` using the `append` function  


## HTML
> `DOM` manipulation is done on this markup.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task List</title>

     <style>
        #submit {
            background-color: blue;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }

        #taskList li {
            color: red;
        }
    </style>
</head>
<body bgcolor="orange">

    <h2>Task List</h2>
    <form id="taskForm">
        <input type="text" id="newTask" placeholder="Enter task">
        <button type="submit" id="submit" disabled>Submit</button>
    </form>
    
    <ul id="taskList"></ul>

</body>
</html>
```

## DOM Rendering
The images below each shows how the page looks like in-browser with; `submit <input>` button disabled by default, and the way it looks on accepting input.
<p align="left">
  <img align="center" src="./img/todo_1.png" title="Disabled" height="200" width="450" style="padding-right:100px;" />
  <img align="center" src="./img/todo_2.png" title="Enabled" height="200" width="450" style="padding-right:100px;" />
</p>

---
## Contributors
```bash
SCT211-0061/2022 - Joseph Amuyunzu;
SCT211-0023/2022 - Teddy Muli;
SCT211-0022/2022 - Adrian Baraka;
SCT211-0869/2022 - Jacob Kasunzu John;
SCT211-0032/2022 - Benedict Waweru;
SCT211-0581/2021- Serena Mumbi Kimiri;
```
