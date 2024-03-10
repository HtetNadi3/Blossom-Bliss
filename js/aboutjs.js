//about page js
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById('learn-more-btn');
  var moreText = document.getElementById('more-text');
  
  btn.addEventListener('click', function() {
    moreText.classList.toggle('hidden');
    if (moreText.classList.contains('hidden')) {
      btn.textContent = 'Learn More';
    } else {
      btn.textContent = 'See Less';
    }
  });
});