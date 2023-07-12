var lat = 0;
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listenin at 3000')):
app.use(express.static('public'));
app.use('/api', express.json()); 
app.use(express.json{limit: '1mg' }));
app.post('/api',(request, response) => {
  console.log('I got a reguest!');
  console.log(request.body);
  const data = reguest .body;

  response.json ({
  status: 'success'
  latitude: data.lat,
  longitude: data.lon,
});
});
   



 


