## Usage
You can clone this repo and then run:

```bash
yarn install
webpack-dev-server
```
## What are we doing today?

We'll finish this code using the [Garage API](https://github.com/lewagon/garage-api#wagon---garage-api-).

Our GARAGE_SLUG will be `???`.

## Tips and Tricks

### How to fetch using POST?

```javascript
 const dataToSend = {
 	key1: value1,
 	key2: value2,
 	key3: value3
 	// ...etc
 }

 fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
    .then(/* Do your Magic */);
```
