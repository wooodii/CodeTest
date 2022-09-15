package JAVA;

// A,B를 입력받고 A-B를 출력하세요
import java.util.Scanner;

public class codetest0825 {
    public static void main(String[] args) {
        // Your Program Goes Here
        Scanner sc = new Scanner(System.in);

        // 과목의 수를 정수로 입력받는다. 
        int n =sc.nextInt();
        
        // 변수 선언 
        double[] score = new double[5];
        // 왜 5를 입력받는건지? n=<5
        double sum = 0; 

        // 배열에 실수를 입력받아 저장
        // 항상 입력받아서 저장하는 식을 세우지 않음
        for(int i=0; i<n; i++){
        score[i] = sc.nextDouble();
        }

        // 배열에 있는 실수들의 합을 구함 
        for(int i=0; i<n; i++) {
            sum += score[i];
        }
            // 평균 구하기 
            double avg = sum/n; 

            // 출력 printf
            // 실수 소수점 : %.1f는 소수점 첫째자리까지 나타내는 것 \n은 라인바꾸기
            System.out.printf("%.1f\n",avg);

            if(avg>=4.0) {
                System.out.println("Perfect");
            } else if(avg>=3.0&& avg<4.0) {
                System.out.println("Good");
            } else if(avg<3.0){
                System.out.println("Poor");
            }
    }
}

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Your Program Goes Here

        Scanner input = new Scanner(System.in);

        // score 라는 배열 선언
        double[] score = new double[10];
        double sum = 0;

        // 학생 8명의 점수 입력받기
        for (int i = 0; i < 8; i++) {
            score[i] = input.nextDouble();
        }
        // 8명의 점수 합하기
        for (int i = 0; i < 8; i++) {
            sum += score[i];
        }

        // 합한 평균을 출력
        double avg = sum / 8;
        System.out.printf("%.1f\n", avg);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int A = in.nextInt();
        int B = in.nextInt();

        System.out.println(A - B);

        in.close();

    }
}