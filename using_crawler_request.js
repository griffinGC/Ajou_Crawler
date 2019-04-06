const crawler = require('crawler-request');
var cheerio = require('cheerio');
//cheerio를 이용해서 크롤링 불가.. => crawler-request사용 

const fs = require('fs');
var url = "http://www.ajou.ac.kr/main/life/food.jsp";

//enter를 없애기 위해서 삽입
const enterReg = /(\r\n|\n|\r)/gm;

let stuDiner; 
let domDiner;
let officeDiner1;
let officeDiner2;
// const dinerList = [stuDiner, domDiner, officeDiner1, officeDiner2];
crawler(url).then(function(response){
    // console.log(response.html);

    //보완필요
    var $ = cheerio.load(response.html);


    //tri_list02 이용해서 가져오면 식단 없을경우 크롤링 불가. 
    //여기는 앞뒤가 생략가능함
    $('table.ajou_table').each(function(idx){ 
    // $('ul.tri_list02').each(function(idx){
        //문자열을 한줄씩 배열에 넣어 쪼개고 개행키는 삭제 다시 한줄씩 출력 
        // var diner = $(this).text().trim().replace(enterReg,"").trim()+'\n';
        var diner = $(this).text().trim();
        if(idx == 0){
            stuDiner = diner;
            // console.log(stuDiner + "학식\n");
        }else if(idx == 1){
            domDiner = diner.trim();
            // console.log(domDiner +"기식\n");
        }else if(idx == 2){
            officeDiner1 = diner;
            // console.log(officeDiner1 + "교직원식당1"+'\n');
        }else if(idx == 3){
            officeDiner2 = diner;
            // console.log(officeDiner2 + "교직원식당2"+'\n');
        }  
    })
    fs.appendFile('test.txt',domDiner,()=>{
        console.log("save");
    })
    // console.log(stuDiner + "학식\n");
    var stuDiner2 = domDiner;

    console.log(stuDiner2);


   
});
