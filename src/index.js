import App from './app.js';
import { conectDB } from './db.js';
conectDB();

App.set('port', 3000)

App.listen(App.get('port'), ()=>{
    console.log('Server on port', App.get('port'))
});
