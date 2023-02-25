const loadData = () => {
    fetch('https://api.github.com/users/ProgrammingHero1/followers?per_page=5')
        .then(res => res.json())
        .then(data => console.log(data))
}

loadData();