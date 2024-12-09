// Function to shuffle the cards inside a carousel
function shuffleCards(carousel) {
  const cards = Array.from(carousel.querySelectorAll('.card'));  // Select all cards within the carousel

  // Remove the 'active' class from all cards first (reset state)
  cards.forEach(card => {
    card.classList.remove('active');
  });



  // Shuffle the cards using a simple random sort
  const shuffledCards = cards.sort(() => Math.random() - 0.5);

  // Remove all cards from the carousel and re-append shuffled ones
  cards.forEach(card => carousel.removeChild(card)); // Remove all cards
  shuffledCards.forEach(card => carousel.appendChild(card)); // Add shuffled cards
}

// Attach the shuffle functionality to each shuffle button
document.querySelectorAll('.shuffle-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Add the 'clicked' class to show the second image (clicked state)
    button.classList.add('clicked');
    
    // After 2 seconds, remove the 'clicked' class to revert back to the original image
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 500); // 2 seconds delay

    // Select all carousels on the page (in case there are multiple)
    const carousels = document.querySelectorAll('.card-carousel');
    
    // Shuffle the cards inside each carousel
    carousels.forEach(carousel => {
      shuffleCards(carousel);
    });
  });
});

document.getElementById('scroll-btn').addEventListener('click', function() {
  // Find the next section you want to scroll to
  const targetSection = document.querySelector('.carousel-container');
  
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth', // smooth scrolling
      block: 'start' // Align the section at the top
    });
  } else {
    console.log('Target section not found');
  }
});

function printContent() {
  // Select the first card from each carousel
  const carousel1FirstCard = document.querySelector('#carousel1 .card:first-child');
  const carousel2FirstCard = document.querySelector('#carousel2 .card:first-child');
  const carousel3FirstCard = document.querySelector('#carousel3 .card:first-child');
  
  // Helper function to get the front and back images from a card
  function getCardImages(card) {
    const frontImage = card.querySelector('.card-front img')?.src;
    const backImage = card.querySelector('.card-back')?.style.backgroundImage.replace('url("', '').replace('")', '');
    return { frontImage, backImage };
  }

  // Collect the front and back images for each of the first cards in the carousels
  const imagesToPrint = [
    getCardImages(carousel1FirstCard),
    getCardImages(carousel2FirstCard),
    getCardImages(carousel3FirstCard)
  ];

  // Create the HTML structure for printing
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Print Carousel Images</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          .cards-to-print {
            visibility: visible; /* Make only this part visible */
          }
          .print-card {
            margin-bottom: 20px;
          }
          .print-card-front, .print-card-back {
            margin: 10px 0;
          }
          .print-card img {
            width: 100%;  /* Adjust size as needed */
            max-width: 200px; /* Limit size */
            display: block;
            margin: 0 auto;
          }

          @media print {
            /* Hide everything by default */
            body {
              visibility: hidden;
            }

            .cards-to-print, .cards-to-print * {
              visibility: visible;
            }

            /* Hide page numbers, headers, footers */
            footer, header, nav, .print-btn, .shuffle-btn, .about-btn {
              display: none !important;
            }

            /* No backgrounds and margins */
            @page {
              size: auto;
              margin: 0;
            }

            body, .cards-to-print {
              background: none !important;
              color: black !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="cards-to-print">
          ${imagesToPrint.map(image => `
            <div class="print-card">
              <div class="print-card-front">
                <img src="${image.frontImage}" alt="Front Image">
              </div>
              <div class="print-card-back">
                <img src="${image.backImage}" alt="Back Image">
              </div>
            </div>
          `).join('')}
        </div>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
}
