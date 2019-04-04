var cheerio = require('cheerio');
var request = require('request');
// var url = "http://www.ajou.ac.kr/main/life/food.jsp";
//request를 이용해서 크롤링 불가..


request(url, function(err, response, body){
    // var $ = cheerio.load(body);
    console.log(response);
    
    // console.log(body);
    
})

// request(url2, function(err, response, body){
//     // var $ = cheerio.load(body);
//     console.log(response);
    
//     // console.log(body);
    
// })
