package JAVA;
// 주어진 점이 어느 사분면에 속하는지 알아내기 

// 점의 좌표를 입력받아  점이 어느 사분면에 속하는지 알아내는 프로그램 
// 입 : 첫줄에는 정수 x가 주어짐
// 출 : 점의 사분면 번호 중 하나를 출력
// 처음으로 한번에 통과...!!!!

import java.util.Scanner;

public class quadrant1 {
    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();

        if (x > 0 && y > 0) {
            System.out.println("1");
        } else if (x > 0 && y < 0) {
            System.out.println("4");
        } else if (x < 0 && y < 0) {
            System.out.println("3");
        } else if (x < 0 && y > 0) {
            System.out.println("2");
        }
    }
}
