document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('search-modal');
  const overlay = document.querySelector('.search-overlay');
  const menuSearch = document.querySelector('.menu-item a[href="javascript:void(0)"]');
  
  // 打开搜索
  menuSearch.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById('local-search-input').focus();
  });

  // 关闭搜索（点背景）
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 调用 Butterfly 自带的本地搜索
  if (typeof searchFunc === 'function') {
    searchFunc('/search.xml', 'local-search-input', 'local-search-result');
  }
});

