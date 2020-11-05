import { insertCarToDOM } from './insert_car_to_dom';

const postApi = (event) => {
    // 2. Prevent default behavior when we submit it
    event.preventDefault();
    // 3. Retrieve data entered by the user in the inputs
    const brand = document.getElementById('brand').value
    const model = document.getElementById('model').value
    const plate = document.getElementById('plate').value
    const owner = document.getElementById('owner').value

    const url = 'https://wagon-garage-api.herokuapp.com/491/cars';

    const json = {
        brand: brand,
        model: model,
        owner: owner,
        plate: plate
    }

    // we can also make it with destructuring
    // const a = 1
    // const json = { a }
    // json == {a: 1}
    
    // const json = { brand, model, owner, plate }
    // https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/

    // json = json.to_s
    const jsonStringified = JSON.stringify(json);

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: jsonStringified
    };

    // 4. Send a POST ajax request to the API
    fetch(url, options)
    .then(res => res.json())
    .then(insertCarToDOM);

};

export { postApi };