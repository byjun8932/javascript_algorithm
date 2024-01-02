// Q. 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

let nums = [100,200,300,400,500];

// 1번 풀이 ->
//
// nums.pop();
// nums.pop();
// console.log(nums);

// 2번 풀이 ->
//
// console.log(nums.slice(0,3))

// 3번 풀이 ->
//
console.log(nums.splice(0,2))
// console.log(nums.splice(0,2,1000))
// console.log(nums)
// splice 메서드는 start 카운트부터 deleteCount의 갯수만큼 배열을 자른다음에 반환하는데 3번쨰 인자인 items에 요소가 지정되면
// 잘려져 반환되는 배열이 아닌 잘릴 대상이 되는 배열에 아이템을 추가한다.