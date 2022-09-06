package codetest0906;
// 알람을 45분 전으로 맞추기 
// 2884번 알람시계
import java.util.Scanner;

public class alarm1 {
    public static void main (String args[]){
        Scanner sc = new Scanner(System.in);
        
        int H = sc.nextInt(); 
        int M = sc.nextInt();
        sc.close();
        
        if(M<45){
            H--;
            // H = H-1을 하면 연산으로 인식하지 않음
            // 시간 -1 감소

            M=60-(45-M);
            // 연산 후 음수가 나올 경우는 
            // 23시로 변경하는 조건을 중첩 if문 사용
            if(H<0){
                H=23;
            }
            System.out.println (H+" "+M);
        }else {
            System.out.println(H+" "+(M-45));
        }
    }
}

