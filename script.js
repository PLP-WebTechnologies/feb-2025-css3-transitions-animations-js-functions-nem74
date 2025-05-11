// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
  });
  
  const toggleBtn = document.getElementById('toggleTheme');
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
  
    // Store preference
    localStorage.setItem('theme', newTheme);
  });
  