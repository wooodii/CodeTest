package JAVA;
// 배열 arr이 주어짐 

// 배열 arr의 각 원소는 숫자 0~9까지 이루어짐
// 배열 arr에서 연속적인 숫자는 하나만 남기고 전부 제거 
// 제거된 후 남은 수들을 반환할 때에는 arr의 원소들의 순서를 유지 
// 입출력 예시
// arr = [1,1,3,3,0,1,1]이면 [1,3,0,1]을 return 함 
// arr = [4,4,4,3,3] 이면 [4,3]을 return 함 
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수 

// 배열 arr의 크기 : 1000000 이하의 자연수
// 배열 arr 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수 

// 풀이1 
import java.util.ArrayList;

public class codetest0822 {
	public int[] solution(int[] arr) {
		ArrayList<Integer> list = new ArrayList<Integer>();

		for (int i = 0; i < arr.length; i++) {
			if (arr[i] != arr[i + 1])
				list.add(arr[i]);
			if (i == arr.length - 2 && list.size() == 0)
				list.add(arr[i]);
			if (i == arr.length - 2 && list.get(list.size() - 1) != arr[i + 1])
				list.add(arr[i + 1]);
		}

		int[] answer = new int[list.size()];
		for (int i = 0; i < list.size(); i++)
			answer[i] = list.get(i);

		return answer;
	}

}

	// 풀이2
	// 전 변수를 미리 저장시켜 놓는 방식
	public int[] solution (int []arr) {
		// solution을 작성해주었으므로 answer 로 받아야 함 
		ArrayList<Integer> tempList = new ArrayList<Integer>();
		// 케스케이딩
		int preNum =10;
		for(int num :arr) {
			if(preNum != num)
				tempList.add(num); 
			preNum = num;
		}
		int[] answer = new int[tempList.size()];
		for(int i=0; i<answer.length; i++) {
			answer[i] = tempList.get(i).intValue();
			// get(i).intValue 
		}
		return answer; 
	}