// 221005 프로그래머스 인덱스 바꾸기 

// my sol > 실행안됨
function solution(my_string, num1, num2) {

    let answer = '';

    answer = my_string.split('');
    answer.splice(num1,1, answer[num1]);
    answer.splice(num2,1, answer[num2]);

    return answer.join('');
}


// sol2
function solution(my_string, num1, num2){
    const answer = [...my_string];

    [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
    return answer.join('');
}

//sol3 이중삼항연산자 
function solution (my_string, num1,num2) {
    return my_string.split("").map((v,i) => i === num1 ? my_string[num2] : i ===num2 ? my_string[num1] : v).join("");
}

// sol4 array.from 
function solution (my_string, num1,num2) {
    var ans = Array.from(my_string);
    
    answer[num1] = my_string[num2]; 
    answer[num2] = my_string[num1]; 

    return answer.join('');

}