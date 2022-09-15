// 파일을 읽어오기 위해 Node.js 의 built-in file system 사용 
// input내용을 읽어와 변수로 선언하고 할당 
// tostring, split을 사용해 배열에 저장 

const input =require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 몰랐는데 백준사이트는 자바스크립트를 지원하지 않고 node.js를 지원 
// 그래서 값을 입력받을 때 fs 방식과 readline 방식이 존재함 보통 sting 까지 필수 
// 입력받는 환경이 리눅스인경우 readFild싱크를 /dev/stdin으로 설정 
// 파일을 string 값으로 받고  
//toString 으로 문자열을 받을 때, 양 끝에 불필요한 줄바꿈이 존재함 > trim으로 처리 
// \n으로 줄을 기준으로 나눠서 배열에 저장 
let i = 0;

while(true){
    let nums= input[i].split(' ');
    
    a=Number(nums[0]);
    b=Number(nums[1]);

    if(a==0 && b==0){
        // 값이 00일 경우는 while문 중단
        break;
    }
    console.log(a+b);
    // i를 하나씩 증가시키면서 input배열의 인덱스를 0부터 순회함 
    i++;
}

document.write(a+b);


// short coding
let input1 = require('fs').readFileSync('dec/stdin','utf8').trim().split('\n');
input1.pop();
// 인풋 배열의 제일 뒤를 없애고 input 중에 answer값을 없애 출력 
for (let answer of input){
    console.log(+answer.split(' ')[0] + +answer.split(' '[1])); 
}


// 참고 
//readline 모듈
//한번에 한줄씩 readable 스트림에서 데이터를 읽기 위한 인터페이스 제공 
// readline.Interface에서는 readline.createInterface()메소드를 통해 생성가능 
// 입력을 원하는 만큼 받기 위해서는 특정 조건에 rl.close() 추가 