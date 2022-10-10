// 221009 프로그래머스 나이 출력
// 221010 프로그램머스 할인비율 

function solution(age) {
    var answer = 0;
    answer = 2022-age+1;
    return answer;
}

function solution(age) {
    return new Date().getFullYear() - age +1;
}


// 아이스 아메리카노
function solution(money) {

    let a = Math.floor(money / 5500) ;  
    let b = money % 5500 ;
    var answer = [a,b];
    return answer;
}

function solution(money) {
    return [~~(money/5500),money%5500];
}

// 배열 뒤집기
function solution(num_list) {
    return num_list.reverse();
  }

const solution = (num_list) => num_list.reverse()

function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}


//옷가게 할인 받기
function solution(price) {
    if (price >= 500000) return Math.floor(price * 0.8);
    if (price >= 300000) return Math.floor(price * 0.9);
    if (price >= 100000) return Math.floor(price * 0.95);
    return price;
  }


  // trunc
function solution(price) {

    let arr_discount = [[500000, 0.2], [300000, 0.1], [100000, 0.05]]

    for(let i = 0 ; i < arr_discount.length ; i++)
        if(arr_discount[i][0] <= price) return Math.trunc(price * (1-arr_discount[i][1]))        

    return price
}

//삼항연산, 분수 곱
function solution(price) {
    return price>=500000 ? parseInt(price*8/10) : (price>=300000 ? parseInt(price*9/10) : (price >= 100000 ? parseInt(price*19/20) : price))
}
