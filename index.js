const Datastore = requers('nebd');
const lat = requre('data');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listenin at 3000')):
app.use(express.static('public'));
app.use('/api', express.json()); 
app.use(express.json{limit: '1mg' }));

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({name: 'AnnaMyroshnyk, status: '🌈'});
database.insert({name: 'Hanna, status: '🌎'});


app.post('/api',(request, response) => {
  console.log('I got a reguest!');
  console.log(request.body);

  const data = reguest.body;
  const timestamp = Date.now()p
  data.time stamp = timestamp;
  database.insert(data);

  response.json ({
  status: 'success',
  timestamp: timestamp,
  latitude: data.lat,
  longitude: data.lon,
 });
});
   



 


