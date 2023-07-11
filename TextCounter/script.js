const userText = document.getElementById('inputText')
const characters = document.getElementById('char')
const totalWords = document.getElementById('words')
const vowels = document.getElementById('vowel')
const consonents = document.getElementById('consonents')

userText.addEventListener('input', function () {
    
    characters.innerHTML = userText.value.length + ' Characters';
    totalWords.innerHTML = userText.value.trim().split(' ').length + ' Words'
    vowels.innerHTML=countVowels(userText.value)+ ' Vowels'
    consonents.innerHTML=userText.value.length-countVowels(userText.value)  +' Consonents'

})
function countVowels(s) {
    
    var c = s.match(/[aeiou]/gi);
    return c === null ? 0 : c.length;
  }