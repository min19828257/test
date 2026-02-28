// Samsung-style demo - 기본 인터랙션

document.addEventListener('DOMContentLoaded', function () {
  // 스크롤 시 헤더 그림자 (선택)
  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
