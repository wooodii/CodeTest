// 두 수 비교하기 (백준) 1330번
// 두 정수 A와 B가 주어졌을 때 , A와 B를 비교하는 프로그램을 작성하시오
// 첫째줄에 A와 B가 주어지고, 공백 한칸으로 구분됨 
//첫째 줄에 다음 세 가지 중 하나를 출력한다.
//A가 B보다 큰 경우에는 '>'를 출력한다.
//A가 B보다 작은 경우에는 '<'를 출력한다.
//A와 B가 같은 경우에는 '=='를 출력한다.

import java.util.Scanner;
public class Main {
	public static void main(String[] args) { 

int a = in.nextInt();
int b = in.nextInt();

in.close();
// in.close() 란 자바에서 가비지컬렉션으로 메모리 점유를 자동해제하는 기능이 존재
// 자동해제하는 대상은 사용중이지 않은 데이터가 대상임
// scanner이라는 변수에 Scanner이라는 객체가 담겨있다는 것만으로 가비지 컬렉션 대상으로도 제외 
// scanner이라는 객체가 사용이 끝났으면 in. close()를 통해서 되돌려줌 
// 입출력은 문제가 없으나, 파일을 물리거나 네트워크 포트 소켓을 물리거나 하면 close 하기 전에는
// 다른 프로그램이 파일을 함부로 엑세스 할 수 없음

if(a>b) {
System.out.printIn (">") }
else if(a<b){
System.out.printIn("<")}
else 
System.out. println("==")} 

