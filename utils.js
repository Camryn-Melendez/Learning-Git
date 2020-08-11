// Write all utility functions here in this file
function showMessage(id, message) {
    const element = document.getElementById(id);
    element.innerHTML = message;
}

// Adds and removes circle in specified location.
function toggleBlock(blockId, blockClass, blockText) {
    const block = document.getElementById(blockId);
    if (block.classList.contains(blockClass)) {
        block.classList.remove(blockClass);
        block.innerHTML = '';
    } else {
        block.classList.add(blockClass);
        block.innerHTML = blockText;
    }
}

// Toggles between action description and undo.
function toggleMessage(id, text, altText) {
    const button = document.getElementById(id);
    if (button.innerHTML === text) { 
        button.innerHTML = altText;
    } else {
        button.innerHTML = text;
    }
}


// Adds a div to the document based on the specifications.
function addPageElement( content, id, theClass, parentId ) {
    // Create a new div.
    let block = document.createElement( 'div' )
    // Give it the content.
    block.innerHTML = content;
    // Add a class and an id.
    block.id = id;
    block.classList.add( theClass );
    // Add it to an existing div.
    const parent = document.getElementById( parentId );
    parent.appendChild( block );
}

// Removes the given block from the diagram.
function removeDiagramBlock( blockId ) {
    const block = document.getElementById( blockId );
    block.remove();
}
