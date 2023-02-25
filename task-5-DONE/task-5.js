/*  DONE THIS PROJECT */

const loadData = (searchValue) => {
    const URL = `https://api.adviceslip.com/advice/${searchValue}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (advices) => {
    const advice = document.getElementById('advice');
    advice.innerText = "";
    advice.innerText = advices.slip.advice;
    const adviceId = document.getElementById('advice-id');
    adviceId.innerText = "";
    adviceId.innerText = advices.slip.id;
}

const loadDataForInput = () => {
    const searchText = document.getElementById('search-field').value;
    if (isNaN(searchText) === true || searchText <= 0) {
        alert('please enter valid number only')
    }
    loadData(searchText);
}

loadData(100)