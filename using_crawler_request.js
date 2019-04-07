const crawler = require('crawler-request');
var cheerio = require('cheerio');
//cheerio를 이용해서 크롤링 불가.. => crawler-request사용 

const fs = require('fs');
var url = "http://www.ajou.ac.kr/main/life/food.jsp";

//enter를 없애기 위해서 삽입
const enterReg = /(\r\n|\n|\r)/gm;
let stuDiner;
let stuDinerL ="";
let stuDinerD ="";
let stuDinerS ="";

let domDiner;
let domDinerT;
let domDinerM ="";
let domDinerL ="";
let domDinerD ="";

let officeDiner;
let officeDiner1L ="";
let officeDiner1D ="";

let officeDiner2;

var strArray;
// const dinerList = [stuDiner, domDiner, officeDiner1, officeDiner2];

function findDiner(diner){
    if(diner.indexOf('등록된 식단이 없습니다.') != -1)
    {
        console.log(diner[2]);
        //리턴
        return;
    }else{
        //함수화 시키기 
        // let m = stuDiner.indexOf('아침');
        let l = diner.indexOf('점심');
        let d = diner.indexOf('저녁');
        let s = diner.indexOf('분식');
        for(let i = l; i<d; i++){
            // console.log(stuDiner[i])
            stuDinerL = stuDinerL.concat(stuDiner[i]+'\n');
        }
        for(let j = d; j<s;j++){
            stuDinerD = stuDinerD.concat(stuDiner[j]+'\n');
        }
        for(let k = s; k<stuDiner.length;k++){
            stuDinerS = stuDinerS.concat(stuDiner[k]+'\n');
        }
        // console.log(stuDinerL);
        // console.log('\n');
        // console.log(stuDinerD);
        // console.log('\n');
        // console.log(stuDinerS);
        diner = [stuDinerL, stuDinerD, stuDinerS];
        return diner;
    }

}

crawler(url).then(function(response){
    // console.log(response.html);

    //보완필요
    var $ = cheerio.load(response.html);


    //tri_list02 이용해서 가져오면 식단 없을경우 크롤링 불가. 
    //여기는 앞뒤가 생략가능함
    $('table.ajou_table').each(function(idx){ 
        //문자열을 한줄씩 배열에 넣어 쪼개고 개행키는 삭제 다시 한줄씩 출력 
        var diner = $(this).text();
        //개행키로 나눔 
        strArray = diner.split('\n');
        //기존에 존재하는 문자열의 앞뒤 공백 삭제 
        for(let i = 0; i<strArray.length; i++){
            strArray[i] = strArray[i].trim();
        }
        //값이 존재하는것 들만 필터링 함
        strArray = strArray.filter(n=>n);
        // console.log(strArray);

        
        if(idx == 0){
            stuDiner = strArray;
            findDiner(stuDiner);
            //식단찾는것 자체를 함수화 시키기 
            /*
            if(strArray.indexOf('등록된 식단이 없습니다.') != -1)
            {
                console.log(strArray[2]);
            }else{
                //함수화 시키기 
                // let m = stuDiner.indexOf('아침');
                let l = stuDiner.indexOf('점심');
                let d = stuDiner.indexOf('저녁');
                let s = stuDiner.indexOf('분식');
                for(let i = l; i<d; i++){
                    // console.log(stuDiner[i])
                    stuDinerL = stuDinerL.concat(stuDiner[i]+'\n');
                }
                for(let j = d; j<s;j++){
                    stuDinerD = stuDinerD.concat(stuDiner[j]+'\n');
                }
                for(let k = s; k<stuDiner.length;k++){
                    stuDinerS = stuDinerS.concat(stuDiner[k]+'\n');
                }
                console.log(stuDinerL);
                console.log('\n');
                console.log(stuDinerD);
                console.log('\n');
                console.log(stuDinerS);

            }
            */
        }else if(idx == 1){
            domDiner = strArray;
            if(strArray.indexOf('등록된 식단이 없습니다.') != -1)
            {
                console.log(strArray[2]);
            }
        }else if(idx == 2){
            officeDiner1 = strArray;
            if(strArray.indexOf('등록된 식단이 없습니다.') != -1)
            {
                console.log(strArray[2]);
            }
        }else if(idx == 3){
            officeDiner2 = strArray;
            if(strArray.indexOf('등록된 식단이 없습니다.') != -1)
            {
                console.log(strArray[2]);
            }
        }  
    })
    fs.appendFile('test.txt',strArray,()=>{
        console.log("save");
    })
    
});
