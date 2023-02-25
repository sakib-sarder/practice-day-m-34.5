const loadData = (word) => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(URL)
        .then(res => res.json())
        .then(words => displayData(words))

}

const displayData = (words) => {
    console.log(words[0].meanings[0].synonyms[0]);
    const mainWord = document.getElementById('main-word');
    mainWord.innerText = words[0].word;
    const phonetic = document.getElementById('phonetic');
    phonetic.innerText = words[0].phonetics[0].text;
    const partsOfSpeech = document.getElementById('partsof-speech');
    partsOfSpeech.innerText = words[0].meanings[0].partOfSpeech;
    // Meaning for noun
    const meaningForNoun = words[0].meanings[0].definitions;
    meaningForNoun.slice(0, 3).forEach((singleMeaning) => {
        const nounMeaningContainer = document.getElementById('noun-meaning-container');
        const li = document.createElement('li');
        li.innerHTML = `
            <li style= "margin-bottom:10px;font-size:1.2rem">${singleMeaning.definition}</li>
        `;
        nounMeaningContainer.appendChild(li);
    });
    const synonymTag = document.getElementById('synonym');
    synonymTag.innerText = `Synonym :  ${words[0].meanings[0].synonyms[0]}`;

    // Meaning for verb
    


    
}

loadData('go');