const crawler = require('crawler-request');
var cheerio = require('cheerio');


// router.post('/:where', (req,res) =>{
    var imgLink
    //c1열람실 
    // var url ="http://u-campus.ajou.ac.kr/ltms/rmstatus/vew.rmstatus?bd_code=JL&rm_code=JL0C1"
    //d1열람실
    var url ="http://u-campus.ajou.ac.kr/ltms/rmstatus/vew.rmstatus?bd_code=JL&rm_code=JL0D1"
    // request(url, function(err,response, body) {
    crawler(url).then(function(response){
        var $ = cheerio.load(response.html);
        var seatStatus;
        var seatPercent;
        var info;
        $('td').each(function(idx){
            var temp = $(this).text();
            var strArray = temp.split('\n');
            
            //기존에 존재하는 문자열의 앞뒤 공백 삭제 
            for(let i = 0; i<strArray.length; i++){
                strArray[i] = strArray[i].trim();
            }
        //값이 존재하는것 들만 필터링 함
        strArray = strArray.filter(n=>n);
        // console.log(strArray);
        if(idx == 2){
            info = strArray[0];
        }else if(idx == 4){
            seatStatus = strArray[2];
            seatPercent = strArray[4];
        }
        });
        console.log();
        console.log(info);
        console.log(seatStatus);
        console.log(seatPercent);
    })
        

            
    
