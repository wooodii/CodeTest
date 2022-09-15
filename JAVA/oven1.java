package JAVA;

import java.util.Scanner;

//2525 오븐 시계
// 첫줄에 현재 시각과 분을 빈칸을 사이에 두고 주어짐 
// 두번째 줄에는 요리에 필요한 시간이 분단위로 주어짐 
// 종료 시각의 시와 분을 공백 사이에 두고 출력

// 시와 분을 하나의 분으로 변환하고, C를 더하고 결과 값을 다시 시외 분으로 변환 

public class oven1 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        int H = sc.nextInt();
        int M = sc.nextInt();
        int time = sc.nextInt();

        // 궅이 if문을 사용하지 않더라도
        // 단위를 분으로 통일하고
        // 시간을 1660 분 까지 입력가능하다는 가정을 확인해
        // 분으로 변경한 뒤 계산
        int min = 60 * H + M; // 시를 분으로 변경
        min += time; // 조리시간을 분에다 더함

        int hour = (min / 60) % 24;
        // 24시가 될 경우 0 부터 시작하도록 %24
        int minute = min % 60;

        System.out.println(hour + " " + minute);
    }
}