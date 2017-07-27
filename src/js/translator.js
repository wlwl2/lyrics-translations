// ////////////
// Song List //
// ////////////

var menuButtons = document.querySelectorAll('a[data-menu-button-id]')
getLatestSongList()
function menuButtonClickEvent (index) {
  menuButtons[index].addEventListener('click', function (event) {
    if (menuButtons[index].getAttribute('data-menu-button-id') === 'chinese-songs') {
      removeSongListItems()
      getLatestSongList()
    }
  }, false)
}

function toggleLyrics () {
  // This anchor (a) should be changed to a className in the future.
  var songItemAnchors = document.querySelectorAll('.chinese-songs__list-item a')
  var songItemLi = document.querySelectorAll('.chinese-songs__container ul li')
  var lyricItems = document.querySelectorAll('.lyrics')

  function hideAllSongItems () {
    songItemLi.forEach(function (li) {
      li.setAttribute('data-item-hidden', 'yes')
    })
  }
  function hideAllLyrics () {
    lyricItems.forEach(function (lyricItem) {
      lyricItem.setAttribute('data-lyrics-hidden', 'yes')
    })
  }
  function songItemClick (index) {
    songItemAnchors[index].addEventListener('click', function (event) {
      hideAllSongItems()
      songItemLi[index].setAttribute('data-item-hidden', 'no')
      hideAllLyrics()
      lyricItems[index].setAttribute('data-lyrics-hidden', 'no')
    }, false)
  }
  for (var i = 0; i < songItemAnchors.length; i++) {
    songItemClick(i)
  }

  function showAllSongItems () {
    songItemLi.forEach(function (li) {
      li.setAttribute('data-item-hidden', 'no')
    })
  }
  function resetSongList () {
    var resetButton = document.querySelector('.chinese-songs-reset-button')
    var searchInput = document.querySelector('.search-bar .search-bar__container input')
    resetButton.addEventListener('click', function (event) {
      searchInput.value = ''
      showAllSongItems()
      hideAllLyrics()
    }, false)
  }
  resetSongList()
}

for (var i = 0; i < menuButtons.length; i++) {
  menuButtonClickEvent(i)
}

function removeSongListItems () {
  var songList = document.querySelector('.chinese-songs__container')
  var songListContainer = document.querySelector('.chinese-songs__container ul')
  songList.removeChild(songListContainer)
  var newList = document.createElement('ul')
  songList.appendChild(newList)
  updateSavedSongsCount()
}

function getLatestSongList () {
  window.localforage.getItem('songList', function (err, value) {
    if (err) throw err
    if (!value) return
    function createListItem () {
      var songListContainer = document.querySelector('.chinese-songs__container ul')
      value.forEach(function (song) {
        var listItem = document.createElement('li')
        listItem.setAttribute('data-item-hidden', 'no')
        var listItemDiv = document.createElement('div')
        listItemDiv.className = 'chinese-songs__list-item'
        var itemLink = document.createElement('a')
        itemLink.setAttribute('tabindex', 0)

        var actionContainer = document.createElement('div')
        actionContainer.className = 'action-container'
        var deleteButton = document.createElement('div')
        deleteButton.className = 'action-container__delete-button'
        deleteButton.setAttribute('tabindex', 0)
        deleteButton.textContent = 'Delete'
        actionContainer.appendChild(deleteButton)

        var infoContainer1 = document.createElement('span')
        infoContainer1.className = 'info-container'
        var listHeading1 = document.createElement('div')
        listHeading1.className = 'list-heading'
        listHeading1.textContent = 'Title:'
        var englishTitleDiv = document.createElement('div')
        englishTitleDiv.className = 'english-title'
        englishTitleDiv.textContent = song.englishTitle
        var chineseTitleDiv = document.createElement('div')
        chineseTitleDiv.className = 'simplified-chinese-title'
        var chineseTitleDivRuby = document.createElement('ruby')
        function rubyCharactersArray1 () {
          if (song.chineseTitle.length === 0) return
          var allLines = []
          for (var j = 0; j < song.chineseTitle.split('').length; j++) {
            var line = song.chineseTitle.split('')[j] + '<rp>(</rp><rt>' +
            song.pinyinTitle.split(' ')[j] + '</rt><rp>)</rp>'
            allLines.push(line)
          }
          return allLines
        }
        chineseTitleDivRuby.innerHTML = rubyCharactersArray1().join('')
        chineseTitleDiv.appendChild(chineseTitleDivRuby)
        infoContainer1.appendChild(listHeading1)
        infoContainer1.appendChild(englishTitleDiv)
        infoContainer1.appendChild(chineseTitleDiv)

        var infoContainer2 = document.createElement('span')
        infoContainer2.className = 'info-container'
        var listHeading2 = document.createElement('div')
        listHeading2.className = 'list-heading'
        listHeading2.textContent = 'Artist:'
        var englishArtistDiv = document.createElement('div')
        englishArtistDiv.className = 'english-artist'
        englishArtistDiv.textContent = song.englishArtist
        var chineseArtistDiv = document.createElement('div')
        chineseArtistDiv.className = 'simplified-chinese-artist'
        var chineseArtistDivRuby = document.createElement('ruby')
        function rubyCharactersArray2 () {
          if (song.chineseArtist.length === 0) return
          var allLines = []
          for (var j = 0; j < song.chineseArtist.split('').length; j++) {
            var line = song.chineseArtist.split('')[j] + '<rp>(</rp><rt>' +
            song.pinyinArtist.split(' ')[j] + '</rt><rp>)</rp>'
            allLines.push(line)
          }
          return allLines
        }
        chineseArtistDivRuby.innerHTML = rubyCharactersArray2().join('')
        chineseArtistDiv.appendChild(chineseArtistDivRuby)
        infoContainer2.appendChild(listHeading2)
        infoContainer2.appendChild(englishArtistDiv)
        infoContainer2.appendChild(chineseArtistDiv)

        itemLink.appendChild(infoContainer1)
        itemLink.appendChild(infoContainer2)
        listItemDiv.appendChild(itemLink)

        listItemDiv.appendChild(actionContainer)

        var lyrics = document.createElement('div')
        lyrics.className = 'lyrics'
        lyrics.setAttribute('data-lyrics-hidden', 'yes')
        lyrics.innerHTML = song.songLyrics
        listItemDiv.appendChild(lyrics)
        listItem.appendChild(listItemDiv)
        songListContainer.appendChild(listItem)
      })
    }
    createListItem()
    toggleLyrics()
  })
}

function actions () {
  function deleteItem () {
    function removeItem (index) {
      window.localforage.getItem('songList', function (err, value) {
        if (err) throw err
        value.splice(index, 1)
        // console.log(value)
        window.localforage.setItem('songList', value, function (err) {
          if (err) throw err
          removeSongListItems()
          getLatestSongList()
          updateSavedSongsCount()
        })
      })
    }
    var songListContainer = document.querySelector('.chinese-songs__container')
    songListContainer.addEventListener('click', function (event) {
      if (event.target.className === 'action-container__delete-button') {
        var listItems = songListContainer.children[0].children
        for (var i = 0; i < listItems.length; i++) {
          var childDeleteButton = listItems[i].children[0].children[1].children[0]
          if (childDeleteButton === event.target) {
            // console.log(i)
            removeItem(i)
          }
        }
      }
    }, false)
  }
  deleteItem()
}
actions()
// /////////////
// Translator //
// /////////////

var languageSelect = document.querySelector('.main-title__language-select-menu')

var headTitle = document.querySelector('html title')
var mainTitle = document.querySelector('.main-title__logo a span')
var documentation = document.querySelector('a[data-menu-button-id="documentation"]')
var translator = document.querySelector('a[data-menu-button-id="translator"]')
// var japaneseSongs = document.querySelector('a[data-menu-button-id="japanese-songs"]')

var englishTitle = document.querySelector('input[name="title-english"]')
var pinyinTitle = document.querySelector('input[name="title-pinyin"]')
var chineseTitle = document.querySelector('input[name="title-chinese"]')
var englishArtist = document.querySelector('input[name="artist-english"]')
var pinyinArtist = document.querySelector('input[name="artist-pinyin"]')
var chineseArtist = document.querySelector('input[name="artist-chinese"]')
var translatorInput = document.querySelector('.translator__input')
var translatorOutput = document.querySelector('.translator__output')

function songForm () {
  var currentSong = translatorInput.value
  if (!createRubyDiv(currentSong)) return // add no output song error
  var songObj = {
    englishTitle: englishTitle.value,
    pinyinTitle: pinyinTitle.value,
    chineseTitle: chineseTitle.value,
    englishArtist: englishArtist.value,
    pinyinArtist: pinyinArtist.value,
    chineseArtist: chineseArtist.value,
    rawSongLyrics: currentSong,
    songLyrics: createRubyDiv(currentSong).innerHTML
  }
  return songObj
}

function numberOfChineseCharacters (myString) {
  var myRegExp = /[,-.，\u3000-〾一-\u9ffe]/g
  var myArray
  var counter = 0
  while ((myArray = myRegExp.exec(myString)) !== null) {
    counter++
    // var myMessage = 'Found match at index ' + myRegExp.lastIndex
    // console.log(myMessage)
  }
  // console.log(counter)
  return counter
}

function updateSavedSongsCount () {
  var savedSongsButtonText = document.querySelector('a[data-menu-button-id="chinese-songs"]')
  window.localforage.getItem('songList', function (err, value) {
    if (err) throw err
    if (!value) {
      savedSongsButtonText.textContent = 'Saved Chinese Songs'
      return
    }
    if (value.length >= 1) {
      savedSongsButtonText.textContent = 'Saved Chinese Songs (' + value.length + ')'
    } else {
      savedSongsButtonText.textContent = 'Saved Chinese Songs'
    }
  })
}
updateSavedSongsCount()

function languageSelectChanges () {
  function languageTextChanges (value) {
    if (value === 'english') {
      languageSelect.value = 'english'
      headTitle.textContent = 'Lyrics Translations'
      mainTitle.textContent = 'Lyrics Translations'
      documentation.textContent = 'Guide'
      translator.textContent = 'Chinese Song Translator'
    }
    if (value === 'simplified-chinese') {
      languageSelect.value = 'simplified-chinese'
      headTitle.textContent = '歌词翻译'
      mainTitle.textContent = '歌词翻译'
      documentation.textContent = '教程'
      translator.textContent = '中文歌翻译'
      // japaneseSongs.textContent = '日本歌存档'
    }
    if (value === 'japanese') {
      languageSelect.value = 'japanese'
      headTitle.textContent = '歌詞の翻訳'
      mainTitle.textContent = '歌詞の翻訳'
    }
  }

  window.localforage.getItem('language', function (err, value) {
    if (err) throw err
    languageTextChanges(value)
  })

  languageSelect.addEventListener('change', function (event) {
    window.localforage.setItem('language', languageSelect.value, function (err) {
      if (err) throw err
      window.localforage.getItem('language', function (err, value) {
        if (err) throw err
        languageTextChanges(value)
      })
    })
  }, false)
}
languageSelectChanges()

function addSongButtonClick () {
  var addSongButton = document.querySelector('.add-song-button')
  var formError = document.querySelector('.translator__form-error')
  addSongButton.addEventListener('click', function (event) {
    function validation () {
      // Clear all errors
      formError.textContent = ''
      // Check if chinese characters are entered in the correct fields.
      if (numberOfChineseCharacters(chineseTitle.value) === 0 ||
          numberOfChineseCharacters(chineseArtist.value) === 0) {
        formError.textContent = 'Error: you need to enter chinese characters/punctuation in (Chinese) fields'
        return false
      }
      // All fields must be filled in.
      if (englishTitle.value.length === 0 ||
        pinyinTitle.value.length === 0 ||
        chineseTitle.value.length === 0 ||
        englishArtist.value.length === 0 ||
        pinyinArtist.value.length === 0 ||
        chineseArtist.value.length === 0 ||
        translatorInput.value.length === 0
      ) {
        formError.textContent = 'Error: length of a field/some fields are less than 0'
        return false
      }
      if (pinyinTitle.value.split(' ').length !== chineseTitle.value.split('').length) {
        formError.textContent = 'Error: pinyin title length not equal to chinese title length. Each pinyin word must be separated by a space.'
        return false
      }
      if (pinyinArtist.value.split(' ').length !== chineseArtist.value.split('').length) {
        formError.textContent = 'Error: pinyin artist length not equal to chinese artist length. Each pinyin word must be separated by a space.'
        return false
      }
      return true
    }
    function addSong () {
      window.localforage.getItem('songList', function (err, value) {
        if (err) throw err
        var newList = []
        var existingSongList = value
        if (!existingSongList) {
          newList.push(songForm())
          window.localforage.setItem('songList', newList, function (err) {
            if (err) throw err
            // console.log('first add')
            updateSavedSongsCount()
          })
          return
        }
        for (var i = 0; i < existingSongList.length; i++) {
          newList.push(existingSongList[i])
        }
        newList.push(songForm())
        window.localforage.setItem('songList', newList, function (err) {
          if (err) throw err
          // console.log('subsequent add')
          updateSavedSongsCount()
        })
      })
    }
    if (validation()) {
      // console.log('all fields have valid values')
      formError.textContent = ''
      addSong()
    }
  }, false)
}
addSongButtonClick()

function addExampleClick () {
  var addExampleButton = document.querySelector('.add-example-button')
  addExampleButton.addEventListener('click', function (event) {
    translatorInput.value = '这是一个例子\n' + 'zhè shì yī gè lì zi\n\n' +
    '这是一首歌曲歌词\n' + 'zhè shì yī shǒu gē qǔ gē cí\n\n' +
    '这是一首歌\n' + 'zhè shì yī shǒu gē\n\n' + '这是一首悲伤的歌曲\n' +
    'zhè shì yī shǒu bēi shāng de gē qǔ\n\n' + '这是一首快乐的歌曲\n' +
    'zhè shì yī shǒu kuài lè de gē qǔ'
  }, false)
}
addExampleClick()

function removeAllSongs () {
  var removeAllSongsButton = document.querySelector('.remove-all-songs')
  removeAllSongsButton.addEventListener('click', function (event) {
    var userWantsToDelete = window.confirm('Are you sure you want to delete all saved songs permanently?')
    if (userWantsToDelete === false) return
    window.localforage.removeItem('songList', function (err) {
      if (err) throw err
      updateSavedSongsCount()
    })
  }, false)
}
removeAllSongs()

function makeNeat (songLines) {
  var cleanSongArray = []
  songLines.forEach(function (songLine) {
    if (songLine !== '') {
      cleanSongArray.push(songLine)
    }
  })
  return cleanSongArray
}

function convertToRuby (cleanSongLines) {
  var rubyArray = []
  for (var i = 0; i < cleanSongLines.length; i++) {
    if (i % 2 === 0) {
      // For each line of characters:
      var rubyLine = []
      for (var j = 0; j < cleanSongLines[i].split('').length; j++) {
        if (!cleanSongLines[i + 1]) return
        if (cleanSongLines[i].split('').length !==
            cleanSongLines[i + 1].split(' ').length) {
          return
        }
        rubyLine.push(cleanSongLines[i].split('')[j] + '<rp>(</rp><rt>' +
        cleanSongLines[i + 1].split(' ')[j] + '</rt><rp>)</rp>')
      }
      rubyArray.push(rubyLine)
    }
  }
  var outputSongContainer = document.createElement('div')
  outputSongContainer.className = 'output-song-container'
  rubyArray.forEach(function (array) {
    var rubyGroupedLine = ''
    array.forEach(function (line) {
      rubyGroupedLine += line
    })
    var div = document.createElement('div')
    var ruby = document.createElement('ruby')
    ruby.innerHTML = rubyGroupedLine
    div.appendChild(ruby)
    outputSongContainer.appendChild(div)
  })
  return outputSongContainer
}

function createRubyDiv (inputSong) {
  if (!inputSong) return
  var rawSongArray = inputSong.split('\n')
  var convertedToRuby = convertToRuby(makeNeat(rawSongArray))
  return convertedToRuby
}

function updatePreview (rubyDiv) {
  if (!rubyDiv) return
  var rubyOutput = document.querySelector('.translator__ruby-output')
  if (rubyOutput.firstElementChild) {
    rubyOutput.removeChild(rubyOutput.firstElementChild)
  }
  rubyOutput.appendChild(rubyDiv)
}

function initSong () {
  var storageSong = window.localStorage.getItem('current-song')
  translatorInput.value = storageSong
  if (!createRubyDiv(storageSong)) return
  translatorOutput.value = createRubyDiv(storageSong).innerHTML
  updatePreview(createRubyDiv(storageSong))
}
initSong()

translatorInput.addEventListener('input', function (event) {
  var currentSong = translatorInput.value
  window.localStorage.setItem('current-song', currentSong)
  if (!createRubyDiv(currentSong)) return
  translatorOutput.value = createRubyDiv(currentSong).innerHTML
  updatePreview(createRubyDiv(currentSong))
}, false)

function resetSong () {
  var resetSongButton = document.querySelector('.reset-song-button')
  resetSongButton.addEventListener('click', function (event) {
    englishTitle.value = ''
    pinyinTitle.value = ''
    chineseTitle.value = ''
    englishArtist.value = ''
    pinyinArtist.value = ''
    chineseArtist.value = ''
  }, false)
}
resetSong()

function saveSongList () {
  var saveButton = document.querySelector('.chinese-songs-save-button')

  saveButton.addEventListener('click', function (event) {
    window.localforage.getItem('songList', function (err, value) {
      if (err) throw err
      // console.log(value)
      var songListString = JSON.stringify(value)
      var blob = new Blob([songListString], {type: 'text/plain;charset=utf-8'})
      saveAs(blob, 'songlist.txt')
    })
  }, false)
}
saveSongList()

function loadSongList () {
  var loadButton = document.querySelector('.chinese-songs-load-button')
  var loadSelection = document.querySelector('.chinese-songs-load-selector')

  var fileAsString

  loadSelection.addEventListener('change', function (event) {
    var selectedFile = loadSelection.files[0]
    var reader = new FileReader()
    reader.onload = function (event) {
      fileAsString = reader.result
    }
    reader.readAsText(selectedFile)
  })

  loadButton.addEventListener('click', function (event) {
    // Gets contents of song list file here as a string.
    if (!fileAsString) return
    var fileAsArray = JSON.parse(fileAsString)
    window.localforage.setItem('songList', fileAsArray, function (err) {
      if (err) throw err
      removeSongListItems()
      getLatestSongList()
      updateSavedSongsCount()
      loadSelection.value = ''
      fileAsString = ''
    })
  }, false)
}
loadSongList()
