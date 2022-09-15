package JAVA;

// 백준 
// 문자열 사용 고려해 고양이, 개, 새싹 출력하기 
public class Main {
	public static void main(String[] args) {
    
		System.out.println("\\    /\\");
		System.out.println(" )  ( ')");
		System.out.println("(  /  )");
		System.out.println(" \\(__)|");    
 
	}
}

import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        StringBuilder sc = new StringBuilder();
        
        sc.append("|\\_/|\n");
        sc.append("|q p|   /}\n");
        sc.append("( 0 )\"\"\"\\\n");
        sc.append("|\"^\"`    |\n");
        sc.append("||_/=\\\\__|\n");
        
        System.out.println(sc);
    }
}

public class Main {
    public static void main(String[] args) {
        String s = "         ,r'\"7\n" + // \", \n 이 제어문자다.
                "r`-_   ,'  ,/\n" + // \n 이 제어문자다.
                " \\. \". L_r'\n" + // \\, \", \n 이 제어문자다.
                "   `~\\/\n" + // \\, \n 이 제어문자다.
                "      |\n" + // \n 이 제어문자다.
                "      |";

        System.out.print(s);
    }
}

// 조건문
두 정수
A와 B가
주어졌을 때, A와
B를 비교하는
프로그램을 작성하시오
.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int a = 0;
        int b = 1;

        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        b = sc.nextInt();

        if (a > b) {
            System.out.println(">");
        } else if (a < b) {
            System.out.println("<");
        } else {
            System.out.println("==");
        }

    }
}

// 시험 성적

시험 점수를 입력받아 90~100점은 A,80~89점은 B,70~79
점은 C,60~69
점은 D, 나머지
점수는 F를
출력하는 프로그램을 작성하시오
.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        if (a >= 90) {
            System.out.println("A");
        } else if (a >= 80 && a <= 89) {
            System.out.println("B");
        } else if (a >= 70 && a <= 79) {
            System.out.println("C");
        } else if (a >= 60 && a <= 69) {
            System.out.println("D");
        } else {
            System.out.pritln("F");
        }

    }
}