const colors=["#FF9AA2","#FFB7B2","#FFDAC1","#E2F0CB","#B5EAD7","#C7CEEA"]
const list_words = [
    {
        word: 'Duong',
        meaning: 'Math'
    },
    {
        word: 'Tan',
        meaning: 'Physics'
    },
    {
        word: 'Lam',
        meaning: 'Chemistry'
    },
    {
        word: 'Duy',
        meaning: 'Math'
    },
    {
        word: 'Trinh',
        meaning: 'Chemistry'
    }
];
const nextBtn = document.querySelector('#nextBtn');
const bodyBcg = document.querySelector('body');
const meaning = document.querySelector('#meaning');
const word = document.querySelector('#word');

nextBtn.addEventListener('click',displayWord);
function displayWord() {
    let number = Math.floor(Math.random()*list_words.length);
    meaning.innerHTML=list_words[number].word;
    word.innerHTML = list_words[number].meaning;
    let index = number%(colors.length);
    bodyBcg.style.backgroundColor = colors[index];
}
