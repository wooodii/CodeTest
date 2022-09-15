package JAVA;

import java.util.Scanner;

public class ab {
    public static void main(String args[]) {
        // 두 정수 A,B를 입력받은 A+B를 출력하는 프로그램을 작성
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();

        for (int i = 0; i < num; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(a + b);
        }
    }
}
