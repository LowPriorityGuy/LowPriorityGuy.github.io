function handleScroll() {
    const elements = document.querySelectorAll('.traits__block');
  
    elements.forEach((element) => {
      const triggerOffset = element.offsetTop - window.innerHeight;
  
      if (window.pageYOffset > triggerOffset) {
        element.classList.add('scrolled');
  
        setTimeout(() => {
          element.style.transition = 'opacity ease-in-out 1.5s, transform ease-in-out 1.5s';
          element.style.transform = 'translate(0)';
          element.style.opacity = '1';
        }, 0);
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);

  
  document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом 'faq__li-item'
    const items = document.querySelectorAll('.faq__li-item');
  
    // Проходимся по каждому элементу и назначаем обработчик события на заголовок
    items.forEach((item) => {
      const title = item.querySelector('.faq__li-title');
      const desc = item.querySelector('.faq__li-desc');
  
      title.addEventListener('click', () => {
        // Переключаем класс 'active' для описания при клике на заголовок
        desc.classList.toggle('active');
      });
    });
  });