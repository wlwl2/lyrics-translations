var searchInput = document.querySelector('.search-bar .search-bar__container input')

function pinyinToAlphabet (pinyin) {
  return pinyin.replace(/([āáǎà])|([ēéěè])|([īíǐì])|([ōóǒò])|[ūúǔùüǖǘǚǜ]|([ĀÁǍÀ])|([ĒÉĚÈ])|([ĪÍǏÌ])|([ŌÓǑÒ])|([ŪÚǓÙÜǕǗǙǛ])/g,
    function (match, a, e, i, o, u, A, E, I, O, U) {
      if (a) return 'a'
      else if (e) return 'e'
      else if (i) return 'i'
      else if (o) return 'o'
      else if (u) return 'u'
      else if (A) return 'A'
      else if (E) return 'E'
      else if (I) return 'I'
      else if (O) return 'O'
      else if (U) return 'U'
    }
  )
}

function concatValues (obj) {
  var result = ''
  var keys = Object.keys(obj)
  for (var i = 0, l = keys.length - 2; i < l; i++) {
    result = result + obj[keys[i]]
  }
  return result
}

function hideAllListItems () {
  var listItems = document.querySelectorAll('.chinese-songs__container ul li')
  var lyricsItems = document.querySelectorAll('.chinese-songs__list-item .lyrics')
  listItems.forEach(function (listItem) {
    listItem.setAttribute('data-item-hidden', 'yes')
  })
  lyricsItems.forEach(function (lyricsItem) {
    lyricsItem.setAttribute('data-lyrics-hidden', 'yes')
  })
}

if (searchInput) {
  searchInput.addEventListener('input', function (event) {
    window.localforage.getItem('songList', function (err, value) {
      if (err) throw err
      hideAllListItems()
      function itemFoundIn (index) {
        var listItems = document.querySelectorAll('.chinese-songs__container ul li')
        var songInfo = pinyinToAlphabet(concatValues(value[index]))
        if (songInfo.indexOf(searchInput.value) !== -1) {
          // console.log(songInfo, index)
          listItems[index].setAttribute('data-item-hidden', 'no')
        }
      }
      for (var i = 0; i < value.length; i++) {
        itemFoundIn(i)
      }
    })
  }, false)
}
