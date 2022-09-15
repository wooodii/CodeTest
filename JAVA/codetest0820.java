// 성격 유형 검사지 만들기 
// 성격은 각 지표에서 두 유형 중 하나로 결정됨 (총 
// 1번지표 : R/T
// 2번지표 : C/F
// 3번지표 : J/M 
// 4번지표 : A/N 
// 검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개 선택지 존재
// 선택지 (매우 비동의(3) - 비동의(2) - 약간 비동의(1) - 모르겠음(0) - 약간 동의(1) - 동의(2) - 매우 동의(3))
// 각 지표마다 선택지당 점수를 매기는 방법이 있음 
// 더 높은 점수를 받은 성격유형이 검사자의 성격유형 
//  단, 성격유형점수가 같다면 사전순으로 빠른 성격유형이 검사자의 성격유형 
// 지표를 담은 1차원 배열 survey
// 검사자가 각 질문마다 선택한 선택지 choices가 매개변수
// 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 
// solution 함수 완성할 것

// 제한사항 
// 1<= survey의 길이(=n) =< 1000
// survey의 원소는 "RT, TR, FC,CF,MJ,JM,AN,NA"중 하나임 
// survry[i]의 첫번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 
// 선택하면 받는 성격유형
// choices의 길이 = survey의 길이 
// choice[i]는 검사자가 선택한 i+1번째 질문의 선택지를 의미함 
// i =< choices의 원소 =< 7 
// choices 1= 매우비동의 ~ 7= 매우 동의 

//패키지 java.util
//컬렉션 프레임워크, 컬렉션 = 객체 크룹을 나타내는 객체, 컬렉션 포함하고 조작위한 아키텍쳐
// 레거시 컬렉션 클래스, 이벤트 모델, 날짜 및 시간기능을 포함 
// 데이터 구조와 알고리즘을 제공해 프로그래밍 노력을 줄여 줌 
// 컬렉션을 앞뒤로 전달하는 공통 언어를 설정해 관련 없는 api 간의 상호 운용성 제공 
// 여러 임시 수집 api를 학습해야 함으로 api학습에 필요한 노력을 줄임

//map 대응관계를 쉽게 표현할 수 있는 자료형 
// 대부분의 언어들도 가지고 있는 자료형으로 associative, array, hash 라 불림 
//순차적으로 해당 요소의 값을 구하지 않고 key 를 통해 value를 얻음 
// map중 가장 간단한 것이 hashmap
//map.put을 통해서 입력

//char at() String으로 저장된 문자열 중에서 한 글자만 선택해서 char타입으로 변환
String str=new String();char c="";str="안녕하세요"; //문자열 저장
c=str.charAt(0);System.out.println(c);

//char 타입으로 변환한 문자를 저장하기 위한 char 타입의 변수 c를 선언하고 
//변수 c에 str.charAt(0)의 값을 저장 > ()안의 숫자는 가져올 문자의 순서 선언 
str.charAt();

// 자바 버전 
package JAVA;

import java.util.*;

public class SolutionMain {

	class Solution {
		//점수를 구할 때 사용할 점수 Array
		int[] scoreList = {3,2,1,0,1,2,3};

		//지표에서 성격유형을 확인할 성격유형을 모아둔 String
		String indexString = "RTCFJMAN";
		private Object index0;
		private Object index1;
		public String solution(String[] survey, int[] choices) {
			// 성격유형을 구해서 더해줄 answer를 공백 string 으로 생성 
			String answer = "";
			
			//String을 Integer와 결부시켜서 관리해야 하므로 Map을 생성함 
			// 성격유형과 점수를 같이 관리해야 함 
			Map<Character, Integer> map = new HashMap<Character, Integer>();
			
			//나중에 NullPointerException이 뜨지 않도록 처음에 모든 성격유형을 다 집어넣음 
			for(int i =0; i< indexString.length(); i++) {
				map.put(indexString.charAt(i),0);
			}
			
			//survey Array를 돌면서 점수를 성격유형에 맞게 추가
			for(int i =0; i <survey.length; i++) {
				//어떤 성격유형인지 charAt로 구분 
				char char0 = survey[i].charAt(0);
				char char1 = survey[i].charAt(1);
				
				
			// 몇번 선택했는지를 확인 
				int selectNum  = choices[i];
			//선택지에 따른 점수를 확인( 1번 지표가 0번 index이기에 -1을 해야함) 
			int selectScore = scoreList[selectNum -1];
			
			//1~3번은 첫번째 성격유형 
			// 4번은 둘다 0점이라 코드에 추가하지 않음 
			// 5~7번은 2번째 성격유형
			// map get
			if (selectNum <4)
				map.put(char0, map.get(char0)+selectScore);
			else if(selectNum >4)
				map.put(char1, map.get(char1)+selectScore); 
			}
			
			//indexString을 기준으로 모든 성격유형 짝을 확인 
			// 성격유형이 가진 값들을 확인해 answer 성격유형을 추가
			// 2개씩 묶어서 처리해야 하므로 i는 2씩 더하기 
			for(int i =0; i<indexString.length(); i +=2) {
				// 성격유형 짝에서 첫번째 성격유형과 두번째 성격유형을 구함
				char index0 = indexString.charAt(i);
				char index1 = indexString.charAt(i+1); 
			}
			
			// 두개의 성격유형 값이 같지 않고, 두번째 성격유형의 점수가 더 높다면 
			//두번째 성격유형을 아니라면 무조껀 첫번째 성격유형을 추가함
			
			if (!Objects.equals(map.get(index0), map.get(index1)) && map.get(index0) < map.get(index1))
				answer += String.valueOf(index1);
			else
				answer += String.valueOf(index0);
		}
			return answer;
 	}
}