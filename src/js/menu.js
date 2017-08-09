(function menuButtonClick () {
  var menuButtons = document.querySelectorAll('a[data-menu-button-id]')
  var sections = document.querySelectorAll('section[data-section-id]')
  var searchBar = document.querySelector('.search-bar')
  var searchBarInput = document.querySelector('.search-bar input')
  var menuBar = document.querySelector('.main-menu')
  var backButton = document.querySelector('.search-bar__back-button')
  function hideAllSections () {
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }
  function initSections () {
    if (!window.localStorage.getItem('data-section-id')) return
    var sectionSelected = window.localStorage.getItem('data-section-id')
    hideAllSections()
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getAttribute('data-section-id') === sectionSelected) {
        if (sectionSelected === 'chinese-songs' ||
            sectionSelected === 'japanese-songs') {
          searchBar.setAttribute('data-hidden', 'no')
          menuBar.setAttribute('data-hidden', 'yes')
          sections[i].setAttribute('data-hidden', 'no')
        } else {
          sections[i].setAttribute('data-hidden', 'no')
        }
      }
    }
  }
  initSections()
  function sectionToggle (clickedMenuItem) {
    hideAllSections()
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getAttribute('data-section-id') === clickedMenuItem) {
        sections[i].setAttribute('data-hidden', 'no')
        window.localStorage.setItem('data-section-id', clickedMenuItem)
      }
    }
  }
  function menuButtonClickEvent (index) {
    menuButtons[index].addEventListener('click', function (event) {
      var clickedMenuItem = menuButtons[index].getAttribute('data-menu-button-id')
      sectionToggle(clickedMenuItem)
    }, false)
  }
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtonClickEvent(i)
    searchMenuButtonClickEvent(i)
  }
  function searchMenuButtonClickEvent (index) {
    menuButtons[i].addEventListener('click', function (event) {
      var clickedMenuItem = menuButtons[index].getAttribute('data-menu-button-id')
      if (clickedMenuItem === 'chinese-songs' || clickedMenuItem === 'japanese-songs') {
        searchBar.setAttribute('data-hidden', 'no')
        searchBarInput.focus()
        menuBar.setAttribute('data-hidden', 'yes')
      }
    }, false)
  }
  function backButtonEvent () {
    var searchInput = document.querySelector('.search-bar .search-bar__container input')
    if (!backButton) return
    backButton.addEventListener('click', function (event) {
      searchBar.setAttribute('data-hidden', 'yes')
      menuBar.setAttribute('data-hidden', 'no')
      searchInput.value = ''
      hideAllSections()
      sections[1].setAttribute('data-hidden', 'no')
      window.localStorage.setItem('data-section-id', 'translator')
    }, false)
  }
  backButtonEvent()
})();
