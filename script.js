document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const caseStudyCards = document.querySelectorAll('.case-study-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const filter = button.dataset.filter;
          
          // Filter case studies
          caseStudyCards.forEach(card => {
              if (filter === 'all' || card.dataset.category === filter) {
                  card.style.display = 'grid';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });
});document.addEventListener('DOMContentLoaded', function() {
});// FAQ Interaction Script
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle active class on clicked item
      item.classList.toggle('active');
      
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
});document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
          const faqItem = question.parentElement;
          faqItem.classList.toggle('active');
          
          // Close other open items
          document.querySelectorAll('.faq-item').forEach(item => {
              if (item !== faqItem && item.classList.contains('active')) {
                  item.classList.remove('active');
              }
          });
      });
  });

  // FAQ Category Filtering
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const category = button.dataset.category;
          
          // Filter FAQs
          document.querySelectorAll('.faq-item').forEach(item => {
              if (category === 'all' || item.dataset.category === category) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});
