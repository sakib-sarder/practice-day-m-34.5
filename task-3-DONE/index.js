/* DONE THIS PROJECT */

const loadData = () => {
  const URL = "https://restcountries.com/v3.1/all";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

//Display countrie
const displayData = (data) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  data.forEach((singleData) => {
    // console.log(singleData.region);
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
    <img src="${singleData.flags.png}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">${singleData.name.common}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
    <button class="btn btn-primary">Details</button>
    </div>
    </div>
    </div>
    `;
    container.appendChild(cardDiv);
  });
};
// load countries by region
const loadCountryDetails = (region) => {
  const URL = `https://restcountries.com/v3.1/region/${region}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data));
};

const displayCountryDetails = (region) => {
  displayData(region);
};
loadData();
