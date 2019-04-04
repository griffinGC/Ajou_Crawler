var cheerio = require('cheerio');
var request = require('request');

var url = "http://www.ajou.ac.kr/main/life/food.jsp";
// var url = "https://www.ajou.ac.kr"
// var url = "http://www.inu.ac.kr/com/cop/mainWork/foodList1.do?siteId=inu&id=inu_050110010000&command=week"
//cheerio를 이용해서 크롤링 불가..
request(url, function(err, response, body){
    var $ = cheerio.load(body);
    // console.log(response);    
    console.log(body);
    
})
