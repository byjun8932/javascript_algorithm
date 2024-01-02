// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

// let result = `${year}/${month}/${day} ${hour}:${minute}:${second}`
//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result)