const axios = require('axios');

axios.get('http://www.ajou.ac.kr/main/life/food.jsp').then(function(response){
    console.log(response.data);
})