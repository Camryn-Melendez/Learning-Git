

const localRepoButton = document.getElementById("button-create-local-repo");
const remoteRepoButton = document.getElementById("button-create-remote-repo");

// Adds event listeners to the create local repo button
localRepoButton.addEventListener('click', function() {
    const blockId = "diagram-local-repo";
    const block = document.getElementById( blockId );

    // If the block exists in the document, remove it.
    if ( block !== null ) {
        removeDiagramBlock( blockId );
    } else {
        addPageElement( "Local Repo", "diagram-local-repo", "local-repo-block", "flow-row-repos" );
    }
});

remoteRepoButton.addEventListener('click', function() {
    const blockId = "diagram-remote-repo";
    const block = document.getElementById( blockId );

    // If the block exists in the document, remove it.
    if ( block !== null ) {
        removeDiagramBlock( blockId );
    } else {
        addPageElement( "Remote Repo", "diagram-remote-repo", "local-repo-block", "flow-row-repos" );
    }
});
