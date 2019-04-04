var cheerio = require('cheerio');
var request = require('request');

var url = "http://www.ajou.ac.kr/main/life/food.jsp";

request(url, function(err, response, body){
    var $ = cheerio.load(body);
    

    // var list = $('.tri_list02').text();
    var list = $('.ajou_table').html();
    console.log(list);
    
    // var arr = $('.tri_list02').children('.li').html();
    // console.log(arr);
})