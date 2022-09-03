package codetest0902;

// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
import java.util.*;

// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

public class 일곱난쟁이 {
    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        int[] arr = new int[9];
        int sum = 0;
        int sp1 = 0;
        int sp2 = 0;

        // 난쟁이 키를 sum에 입력
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }

        // 오름차순으로 정렬하고 9명의 키의 합에서 2명을 뺐을 때, 100이 된경우
        // 그 수를 sp1과 sp2에 넣음
        Arrays.sort(arr);

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (sum - arr[i] - arr[j] == 100) {
                    sp1 = i;
                    sp2 = j;
                    break;
                }
            }
        }
        // sp1과 sp2는 생략하고 나머지 난쟁이의 키를 출력
        for (int i = 0; i < arr.length; i++) {
            if (i == sp2 || i == sp2)
                continue;
            System.out.println(arr[i]);
        }
        // sc.close();
    }
}
