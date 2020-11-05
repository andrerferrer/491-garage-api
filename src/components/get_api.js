import { insertCarToDOM } from './insert_car_to_dom';

// To get all cars
// 1. Send an AJAX request to the API to fetch all cars
const getApi = () => {
  const url = 'https://wagon-garage-api.herokuapp.com/491/cars';

  fetch(url)
      .then(res => res.json())
      .then((cars) => {
        console.log(cars);
        //   cars is an array of cars
        // 2. For each car
        const carsList = document.querySelector('div.cars-list');
        carsList.innerHTML = '';

        cars.forEach(insertCarToDOM);
      });
};

export { getApi };