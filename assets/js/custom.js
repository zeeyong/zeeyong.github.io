// Korean Conferences 역순 번호 자동 추가
document.addEventListener('DOMContentLoaded', function() {
  // pub-list-item 요소들 찾기
  const items = document.querySelectorAll('.pub-list-item.view-citation');
  const totalCount = items.length;
  
  // 각 항목에 역순 번호 추가
  items.forEach((item, index) => {
    const number = totalCount - index;
    item.setAttribute('data-number', number);
    
    // CSS content 속성에서 사용할 수 있도록 스타일 추가
    item.style.setProperty('--item-number', `"[${number}]"`);
  });
});