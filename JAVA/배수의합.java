package JAVA;

// 0825
import java.util.Scanner;

public class 배수의합 {
    public static void main(String[] args) {
        // Your Program Goes Here
        Scanner input = new Scanner(System.in);

        int[] arr = new int[10];
        int sum = 0;
        int cnt = 0;

        for (int i = 0; i < 10; i++) {
            arr[i] = input.nextInt();
            if (arr[i] == 0)
                break;
            sum += arr[i];
            cnt++;
        }

        // sum을 double로 형변환
        double avg = (double) sum / cnt;
        // double 형식을 소수 첫째자리까지 표현
        System.out.printf("%d %.1f", sum, avg);

        // 10개의 정수가 차례로 주어지는데,
        // 0이 주어지면 그때까지 주어진 정수 중 2의 배수의 개수와 합계를 출력하는 프로그램을 작성해보세요.
        Scanner input = new Scanner(System.in);

        int[] arr = new int[10];
        int num = 0;
        int sum = 0;

        for (int i = 0; i < 10; i++) {
            arr[i] = input.nextInt();

            // 조건문에서 중괄호 치지 않고 break 하는 경우, 다음 if 구문으로 넘어감
            if (arr[i] == 0)
                break;

            if (arr[i] % 2 == 0) {
                sum += arr[i];
                num++;
            }
        }
        // 코드 실행 지점은 for문 끝
        System.out.print(num + " " + sum);
    }
}
