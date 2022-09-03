import java.util.Scanner;

<<<<<<< HEAD

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
=======
public class codetest0826 {
    public static void main(String[] args) {
        // 10개 정수 저장
        Scanner input = Scanner(System.in);
        int[] num = new int[10];
        int cnt = 0;

        //입력받은 정수 저장 
        for(int i=0; i<10; i++){
            num[i]=input.nextInt();
            if(num[i] == 0)
                break;
            cnt++;
        }
        //0이 입력되면 출력정지후, 지금까지 받은 수 입력
        // 이전에 입력되었던 배열 num을 숫자 ㄱ
        
            for(int i= cnt-1; i>=0; i--){
                System.out.print(arr[i]+" ");
            }
        
    }
}
>>>>>>> 5a912c499c32c84164179b6bbc8c51b341347b6a
