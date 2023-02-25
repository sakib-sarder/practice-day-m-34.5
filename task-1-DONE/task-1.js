const result = person.result;
const showData = () => {
    result.forEach((singlePerson) => {
        const container = document.getElementById('container');
        const cardDiv = document.createElement('div');
        console.log(singlePerson);
        cardDiv.classList.add('w-auto');
        cardDiv.innerHTML = `
        <div class="card text-bg-light mb-3 " style="max-width: 18rem">
          <div class="card-header">Persons Name: ${singlePerson.name.common}</div>
          <div class="card-body">
            <p class="card-title">Age: ${singlePerson.age}</p>
            <p class="card-text">
              Street: ${singlePerson.address.street + ", House No: " + singlePerson.address.house}
            </p>
          </div>
        </div>
        `;
        container.appendChild(cardDiv);
    })
}

showData();