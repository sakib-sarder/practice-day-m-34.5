const displayData = (data) => {
    data.forEach((singleData) => {
        const container = document.getElementById('container');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
        <img src="${singleData.imageURL ? singleData.imageURL : 'https://picsum.photos/200/300'}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">Car Name: ${singleData.name}</h5>
          <p class="card-text">Car Details: ${singleData.description}</p>
          <a href="#" class="btn btn-primary">Car Price: 
          ${singleData.price}</a>
        </div>
      
        `;
        container.appendChild(cardDiv);
    })
}

displayData(data);