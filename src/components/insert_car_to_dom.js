const buildHtmlFrom = (car) => {
    const brand = car.brand;
    const model = car.model;
    const owner = car.owner;
    const plate = car.plate;

    // the above is the same as
    // const { brand, model, owner, plate } = car
  
    const carHtml = `
      <div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${brand} ${model}" />
        </div>
        <div class="car-info">
          <h4>${brand} ${model}</h4>
          <p><strong>Owner:</strong> ${owner}</p>
          <p><strong>Plate:</strong> ${plate}</p>
        </div>
      </div>  
    `;
  
    return carHtml;
};

const insertCarToDOM = (car) => {
    // const brand = car['brand'];
    const carHtml = buildHtmlFrom(car);
    //    3. Insert a new row in the cars table

    const carsList = document.querySelector('div.cars-list');
    carsList.insertAdjacentHTML('beforeend', carHtml);
};

export { insertCarToDOM };