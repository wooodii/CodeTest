// 신고 결과 받기 0821
// 게시판 불량 이용자를 신고하고 처리결과를 메일로 발송 
// 각 유저는 한번에 한명의 유저 신고 가능(횟수제한x, 다른 유저 신고 가능)
// k번 이상 싱고된 유저는 게시판 정지 및 해당 유저를 신고한 유저들에게 정지사실 발송 
// 전체 유저 목록 = ["muzi", "frodo","appach", "neo"] 
// 이용자의 ID가 담긴 문자열 배열 id_list와 
// 각 이용자가 신고한 이용자의 ID정보가 담긴 문자열 배열 report
// 정지 기준이 되는 신고 횟수 k 가 매개변수
// 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return(solution함수)

function solution(id_list, report, k) {
    const answer = new Array(id_list.length)];
    answer.fill(0)
	// answer 배열을 id_list 크기만큼 할당하고 fill함수를 사용해 0으로 초기화
    const report_list ={}
    
    id_list.map((user)=>){
                report_list[user] =[]
                }
	// report_list 객체에 key는 user의 id값을  value는 신고한 사람을 담기위한 배열 추가 
    
    report.map((user)=>{
            const [user_id, report_id] =user.split('')
            if(!report_list[report_id].includes(user_id)){
                report_list[report_id].push(user_id)
            })
    })
//report의 값이  ["muzi frodo",...]과 같이 신고한 id 신고당한 id
//형식의 띄어쓰기로 구분된 문자열을 split으로 자르고, 각각 user_id와 report_id로 나눠줌 
// 배열에 포함하는지 여부를 확인해 포함하지 않을 때 신고자 이름을 추가
    
    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOF(user)] +=1
            })
        }
    }

	// report_list의 배열길이가 k값 이상이면 정지된 유저
 	// answer에 해당 유저를 신고한 유저가 받은 메일의 수 +1 증가 
    return answer;