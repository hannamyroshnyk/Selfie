const Datastore = requer('nebd');
const lat = requre('data'); 
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listenin at 3000')):
app.use(express.static('public'));
app.use('/api', express.json()); 
app.use(express.json{limit: '1mg' }));

const database = new Datastore('database.db');
database.loadDatabase();



app.get('/api',(reque, response) => {
  database.find({}, (err, datd) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
});
});
app.post('/api',(request, response) =>{
  const data = reguest.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);

 });
   



 


