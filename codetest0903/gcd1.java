package codetest0903;

import java.util.Scanner;
// 두개의 자연수를 입력받아  최대공약수 및 최소공백수 출력 프로그램 
// 둘은 10000이하의 자연수이며 사이에 공백이 주어짐 

public class gcd1 {
    public static void main (String args[]) {
        
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        // 최대공약수 
        int c = gcd(x,y); 

        System.out.println(c);
        System.out.println(x*y/c);
    }

    // 최대공약수 재귀 방식
    public static int gcd(int x, int y) {
        if (y ==0)
        return x;
        // gcd(a,b) = gcd(b,r)이므로 (r=a%b)
        return gcd(y, x%y);
    }
}