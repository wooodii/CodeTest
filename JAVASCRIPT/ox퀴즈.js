// OX퀴즈
// eval(문자열) 
// eval is evil : 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수 
// 
function solution(quiz) {
    return quiz.map(q => {
        // 배열에 변수르 담아서 출력
      const [formula, answer] = q.split('=');
      return eval(formula) === +answer ? 'O' : 'X';
    });
  }


  function solution(quiz) {
    let result = []
    // a는 나눈 배열의 첫번째 합 
    for(let i = 0; i <quiz.length; i++) {
        let a = eval(quiz[i].split("=")[0])
        let b = quiz[i].split("="[1] / 1)

        if(a === b){
            result.push("O")
        }else {
            result.push("X")
        }
    }

return result

}

let solution = quiz => quiz.map (e=> ["X", "O"][~~eval(e.replace("=", "=="))])