//0924 프로그래머스 올바른 괄호(스택, 큐)
// 올바른 괄호로 문자열을 넣으려면, 마지막은 ), 처음은 (로 시작하도록 조건문 작성 

// sol1 > 시간초과됨 

function solution(s) {
    let stack = [];
    let cnt =0 ;

    for (let i =0; i<s.length; i++){
        if(s[i] === '('){
            stack.push('(');
            cnt ++;
        }
        else {
            stack.pop();
            cnt--;
        }
    }
    if(stack.length >0 || cnt !==0) return false;
    return true
}

//sol2 
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}


// sol3 match 활용 
// 특정 텍스트가 검색할 단어, 찾고싶을 단어가 있는 경우 해당 텍스트가 문구에 포함되어 있는지 확인 
function is_pair(s){
    var result = s.match(/(\(|\))/g);
    return result[0] == '(' && result.length % 2 == 0 ? true : false
  }
  //result[0]이 (이고 length가 짝수이면 무조건 통과되는코드 