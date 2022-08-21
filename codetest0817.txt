// WHERE IN 
// LIKE '%'
// CASE - WHEN - THEN - ELSE - END
// LIMIT 
// DATE_FORMAT

// 해당하는 이름이 있는 열만 출력하기 - in
// in ( ) 안에 해당 이름을 ''형태로 입력
select animal_id, name, sex_upon_intake
from animal_ins
where name in ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
order by animal_id

// 강아지라는 조건을 설정하고 이름이 el이 들어간 강아지 찾기 
// TYPE, LIKE %
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE ANIMAL_TYPE = 'Dog' AND NAME LIKE '%EL%'
ORDER BY NAME

//중성화 여부 파악하기 - CASE ~ WHEN ~ THEN ~ ELSE ~ END
// CASE WHEN X = Y THEN A ELSE B END
// 조건 x = y 가 true일 경우 a 아니면 b
// CASE WHEN X<Y THEN A WHEN X=Y THEN B ELSE C END
// 조건 x=y가 TRUE일 경우 A 로, 조건 X=Y일 경우엔 B로 그렇지 않으면 C
SELECT ANIMAL_ID, NAME, 
CASE 
WHEN SEX_UPON_INTAKE LIKE '%Neutered%' THEN 'O'
WHEN SEX_UPON_INTAKE LIKE '%Spayed%' THEN 'O'
ELSE 'X' END
FROM ANIMAL_INS;

// 가장 오래 보호한 강아지 2마리 출력 
// INS와 OUTS의 ANIMAL_ID이름이 같다는 전제 하에, 
// 입양일 - 입소일이 가장 많은 순으로 출력 
// LIMIT 2로 가장 오래된 강아지 2마리만 출력
SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I, ANIMAL_OUTS O
WHERE I.ANIMAL_ID = O.ANIMAL_ID
ORDER BY O.DATETIME - I.DATETIME DESC
LINIT 2

// datetime > date로 변경 - DATE_FORMAT 사용하기 
// DATE_FORMAT( 해당테이블, 형식) ** 형식 : '%Y-%M-%D'
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS "날짜" 
FROM ANIMAL_INS



