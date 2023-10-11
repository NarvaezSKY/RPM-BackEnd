import App from './app.js';
import { conectDB } from './db.js';
conectDB();

App.listen(4000);
console.log('hola',4000)