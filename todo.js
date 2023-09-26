const TaskInput = document.querySelector(".Input-Tab");
const TaskList = document.querySelector(".task-list");
const AddTaskBtn = document.getElementById("AddTask-Btn");
const TaskForm = document.getElementById("task-form");

AddTaskBtn.addEventListener('click', addTask);

TaskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting and page reloading
    addTask();
});

// Function to add a new task to the task list
function addTask() {
    // Get the text input from the TaskInput element and remove leading/trailing spaces
    const TaskText = TaskInput.value.trim();

    // Check if the input is not empty
    if (TaskText !== "") {
        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.className = "taslist fade-in";

        // Remove the 'fade-in' class after a short delay for a fade-in animation
        setTimeout(() => {
            listItem.classList.remove("fade-in");
        }, 500);

        // Create a radio input element for task completion
        const itemRadio = document.createElement('input');
        itemRadio.type = "checkbox";
        itemRadio.name = "Itemcheckbox";
        itemRadio.className = "task-checkbox completed";

        // Create a label for the task text
        const label = document.createElement('label');
        label.textContent = TaskText;
        label.setAttribute("for", "taskcheck");

        // Create a delete icon for task removal
        const deleteIcon = document.createElement('i');
        deleteIcon.className = "bx bx-x bx1";
        deleteIcon.title = "delete the task";

        // Add an event listener to the 'x' icon for task deletion
        deleteIcon.addEventListener('click', () => {
            // Add 'fade-out' class for fade-out animation
            listItem.classList.add("fade-out");

            // Remove the list item after the animation is complete
            setTimeout(() => {
                TaskList.removeChild(listItem);
            }, 500);
        });

        // Add an event listener to the radio input for task completion
        itemRadio.addEventListener('change', () => {
            // Toggle the "completed" class on the parent li element
            listItem.classList.toggle("completed");
        });

        // Add the elements to the task list
        listItem.appendChild(itemRadio);
        listItem.appendChild(label);
        listItem.appendChild(deleteIcon);
        TaskList.appendChild(listItem);

        // Clear the input field after adding the task
        TaskInput.value = "";
    }
}
