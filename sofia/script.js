// Modal Functionality
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const openModalButton = document.getElementById('open-modal');
const postCommentButton = document.getElementById('post-comment');
const responseInput = document.getElementById('response-input');
const commentsList = document.getElementById('comments-list');
const printButton = document.getElementById('print-button');

// Open modal when "TYPE" button is clicked
openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex'; // Show the modal
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; // Hide the modal
  }
});

// Prevent closing modal when clicking inside the modal content
modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Post comment and close modal
postCommentButton.addEventListener('click', () => {
  const commentText = responseInput.value.trim();
  if (commentText) {
    const currentTime = new Date().toLocaleString(); // Timestamp
    const newComment = document.createElement('li');
    newComment.innerHTML = `
      <strong>Dear Reader,</strong> ${commentText} 
      <br><small>${currentTime}</small>
      <hr style="border: 1px solid #000;">
    `;
    commentsList.appendChild(newComment); // Add comment to the list
    responseInput.value = ''; // Clear the input
    modal.style.display = 'none'; // Close the modal
  } else {
    alert('Please write a comment before posting!');
  }
});

// Print functionality
printButton.addEventListener('click', () => {
  const lastComment = commentsList.lastElementChild; // Get the most recent comment

  if (lastComment) {
    const printWindow = window.open('', '_blank', 'width=600,height=800');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Print Preview</title>
        <style>
          body {
            font-family: 'Georgia', serif; /* Use Georgia font for text */
            margin: 0;
            padding: 20px;
            background-image: url('images/ripped-paper-paperclip.svg'); /* Background image */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            color: #000; /* Black text for contrast */
          }
          .comment-preview {
            padding: 20px;
            border: 1px solid #ddd; /* Light border */
            border-radius: 5px; /* Rounded corners */
            background-color: #fff; /* White background for the comment */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
          }
        </style>
      </head>
      <body>
        <div class="comment-preview">${lastComment.innerHTML}</div>
      </body>
      </html>
    `);
    printWindow.document.close(); // Close the document to trigger rendering
    printWindow.print(); // Trigger the print dialog
  } else {
    alert('No comments available to print.');
  }
});
