import java.util.Scanner;


// 10개의 정수를 입력받고, 0이 입력받아질 경우
// 이전에 입력되었던 정수들을 최근에서부터 꺼꾸로 출력하기 
public class codetest0826 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); 
        // Your Program Goes Here

        int[] arr = new int[10];
        int cnt =0;

        for(int i =0; i<10; i++) {
            arr[i] = sc.nextInt();
            if(arr[i] == 0) 
            break;
            cnt++;
        }

        for(int i = cnt-1; i >=0; i--) {
            System.out.print(arr[i] + " ");
        }
    
    }
}