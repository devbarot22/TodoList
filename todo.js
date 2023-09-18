const TaskInput = document.getElementById("Input-Task");
const TaskList = document.querySelector(".task-list");
const AddTaskBtn = document.getElementById("AddTask-Btn");

AddTaskBtn.addEventListener('click', () => {
    const TaskText = TaskInput.value.trim();
    if (TaskText !== "") {
        const listItem = document.createElement('li');
        listItem.className = "taslist";
        
        // Create a radio input element
        const itemRadio = document.createElement('input');
        itemRadio.type = "checkbox";
        itemRadio.name = "Itemcheckbox";
        itemRadio.className = "task-checkbox completed";

        // Create a label for the radio input
        const label = document.createElement('label');
        label.textContent = TaskText;
        label.setAttribute("for", "taskcheck");

        // Create a delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = "bx bx-x bx1";
        deleteIcon.title = "delete the task"

        // Add an event listener to the 'x' icon for task deletion
        deleteIcon.addEventListener('click', () => {
            // Remove the task's parent element (li) when 'x' is clicked
            TaskList.removeChild(listItem);
        });

        itemRadio.addEventListener('change', () => {
            // Toggle the "completed" class on the parent li element
            listItem.classList.toggle("completed");
        });

        listItem.appendChild(itemRadio);
        listItem.appendChild(label);
        listItem.appendChild(deleteIcon);
        TaskList.appendChild(listItem);

        TaskInput.value = "";
    }
});
