// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

function removeDuplicates(){
    'use strict';

    // Reference to where the output goes:
    let output = document.getElementById('output');

    let message = '';

    // temp array to fill with non duplicate values
    let temp = [];
    // flag so dont have to iterate over the whole array if duplicate has been spotted
    let seen = false;

    for (let i = 0; i < tasks.length; i++) {
        seen=false;
        for (let j = 0; j < temp.length; j++) {
            if(temp[j]===tasks[i]){
                seen = true;
                break;
            }
        }
        if(seen === false){
            temp.push(tasks[i]);
        }
    }
    tasks = temp;

    //update list
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;

    return false;
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById('remove').onclick = removeDuplicates;
} // End of init() function.
window.onload = init;