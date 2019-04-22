const crawler = require('crawler-request');
var cheerio = require('cheerio');
//cheerio를 이용해서 크롤링 불가.. => crawler-request사용 

var url = "http://www.ajou.ac.kr/main/life/schedule_haksa.jsp";



//크롤링시작
crawler(url).then(function(response){
    var $ = cheerio.load(response.html);
    $('td.left_pd').each(function(idx){ 
        var schedule = $(this).text();
        console.log(schedule);
    })
    
});
