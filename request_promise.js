const crawler = require('crawler-request');
var cheerio = require('cheerio');
//cheerio를 이용해서 크롤링 불가.. => crawler-request사용 

var url = "http://www.ajou.ac.kr/main/life/food.jsp";

let stuDiner; 
let domDinerM;
let domDinerL;
let domDinerD;
let officeDiner1;
let officeDiner2;
// const dinerList = [stuDiner, domDinerM, domDinerL, domDinerD, officeDiner1, officeDiner2];
crawler(url).then(function(response){
    // console.log(response.html);
    var $ = cheerio.load(response.html);
    var temp = $('ul.tri_list02').text().trim();
    console.log(temp);

    //여기는 앞뒤가 생략가능함
    $('ul.tri_list02').each(function(idx){
        var diner = $(this).text().trim() + '\n';
        
        
        // if(idx == 0 || 1){
        //     stuDiner = diner;
        //     console.log(diner + "1");
        // }else if(idx == 2){
        //     domDinerM = diner;
        //     console.log(diner + " 2");
        // }else if(idx == 3){
        //     domDinerL = diner;
        // }else if(idx == 4){
        //     domDinerD = diner;
        // }else if(idx == 5){
        //     officeDiner1 = diner;
        // }else if(idx == 6){
        //     officeDiner2 = diner;
        // }
        console.log(diner);
    })

    
});
