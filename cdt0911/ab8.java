package cdt0911;
// 코드 시간을 최소화하고 싶다면
// 주어진 문제에서 최적의 알고리즘을 찾는 것 
// 입벽범위가 0초과 10미만인경우의 문자열 분리 시 공백이 들어가는 위치와 
// 배열을 따지기 
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.io.IOException;

public class ab8 {
    public void main(String args[]) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        int a;
        int b;

        StringTokenizer st;
        for(int i =1; i<= T; i++){
            st =new StringTokenizer(br.readLine()," ");
            a = Integer.parseInt(st.nextToken());
            b = Integer.parseInt(st.nextToken());
            System.out.println("Case #" + i + " : "+a+"+"+b+"="+(a+b));
        }
    }
}
