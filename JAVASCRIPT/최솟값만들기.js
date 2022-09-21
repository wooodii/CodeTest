// 0921 최솟값 만들기 프로그래머스

function solution(A,B){
    var answer = []
    // 두 배열의 각 원소를 뽑아서 곱한 값의 합이 최소가 되도록 
    // 가장 작은수 * 가장 큰 수,  다 더하기 
    var a = A.sort((a,b) => a-b) 
    var b = B.sort((a,b) => b-a) 

    for(var i=0; i<a.length; i++){
      answer.push(a[i]*b[i])
    }
    
    var result = answer.reduce((a,b) => a+b)
    // reduce(과거요소,현요소) 배열 각 요소에 대해 주어진 리듀서 함수 실행하고,결과값 반환
    return result
  }

  //sol2
  function solution(A,B) {
    var ans =0; 

    A.sort((a,b)=> a-b);
    B.sort((a,b)=> b-a);
    
    ans=A.reduce((acc, cur, idx)=>{
        return acc+A[idx]*B[idx];
    },0)

    return ans;
  }