// 221009 프로그래머스 나이 출력
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