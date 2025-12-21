// Korean Conferences 역순 번호 자동 추가
document.addEventListener('DOMContentLoaded', function() {
  // Korean Conferences 섹션 찾기 (3번째 section)
  const sections = document.querySelectorAll('section');
  const koreanSection = sections[2]; // 0부터 시작하므로 3번째는 index 2
  
  if (koreanSection) {
    // Korean Conferences 섹션의 pub-list-item만 찾기
    const items = koreanSection.querySelectorAll('.pub-list-item.view-citation');
    const totalCount = items.length;
    
    // 각 항목에 역순 번호 추가
    items.forEach((item, index) => {
      const number = totalCount - index;
      item.setAttribute('data-number', number);
      
      // CSS content 속성에서 사용할 수 있도록 스타일 추가
      item.style.setProperty('--item-number', `"[${number}]"`);
    });
  }
});