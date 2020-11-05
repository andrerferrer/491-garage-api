// 1. imports
import { getApi } from './components/get_api';
import { postApi } from './components/post_api';
// 2. function calls
getApi();

// 3. event listeners
const form = document.querySelector('form');

form.addEventListener('submit', postApi);
