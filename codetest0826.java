import java.util.Scanner;

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
