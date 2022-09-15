package JAVA;

import java.util.Scanner;

// 배열사용
public class 보다작은수 {
    public static void main(String[] args) {
        // 정수 n개로 이루어진 수열 a와 정수 x 가 주어짐
        // a에서 x보다 작은 수를 모두 출력

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int X = sc.nextInt();
        int arr[] = new int[N];

        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();

        }
        sc.close();

        // 출력을 위한 for문 안에 if 문 넣기
        for (int i = 0; i < N; i++) {

            if (arr[i] < X) {
                System.out.print(arr[i] + " ");
            }
        }

    }
}
