const fills = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');

// Drag Listeners
for(item of fills) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

//Loop Through containers
for(container of containers) {
    container.addEventListener('dragover', dragOver);
}

// Drag Functions
function dragStart() {
    this.className += ' dragging';
}

function dragEnd() {
    this.className = 'item';
}

function dragOver(e){
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    this.appendChild(draggable);
}
