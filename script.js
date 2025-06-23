// Array of inspirational quotes
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  }
];

// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const quoteCard = document.querySelector('.quote-card');

let currentQuoteIndex = 0;

// Function to get a random quote
function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentQuoteIndex && quotes.length > 1);
  
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

// Function to display a new quote with animation
function displayNewQuote() {
  // Add loading state
  quoteCard.classList.add('loading');
  newQuoteBtn.disabled = true;
  
  setTimeout(() => {
    const quote = getRandomQuote();
    
    // Fade out current quote
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
      // Update quote content
      quoteText.textContent = `"${quote.text}"`;
      quoteAuthor.textContent = `- ${quote.author}`;
      
      // Fade in new quote
      quoteText.style.opacity = '1';
      quoteAuthor.style.opacity = '1';
      
      // Remove loading state
      quoteCard.classList.remove('loading');
      newQuoteBtn.disabled = false;
    }, 200);
  }, 300);
}

// Event listeners
newQuoteBtn.addEventListener('click', displayNewQuote);

// Initialize with a random quote on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth transition styles
  quoteText.style.transition = 'opacity 0.3s ease';
  quoteAuthor.style.transition = 'opacity 0.3s ease';
  
  // Display initial random quote
  displayNewQuote();
});

// Add keyboard support
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault();
    displayNewQuote();
  }
});

// Add some fun easter eggs
let clickCount = 0;
newQuoteBtn.addEventListener('click', () => {
  clickCount++;
  
  if (clickCount === 10) {
    console.log('🎉 Wow! You really love quotes! Here\'s a bonus: "The best way to predict the future is to create it." - Peter Drucker');
  } else if (clickCount === 25) {
    console.log('🚀 Quote master! You\'ve generated 25 quotes. Keep the inspiration flowing!');
  }
});
