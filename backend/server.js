const { default: axios } = require('axios');
const express = require('express')

const app = express()


app.get('/proxy', async (req, res) => {
    try {
      const response = await axios.get('https://github.com/paramsingh77/findNearMe'); // Replace with target URL
      res.send(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching the page');
    }
  });

app.listen(3005,()=>{
    console.log("Server started");
});