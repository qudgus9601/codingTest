function solution(num, total) {
  var answer = [];
  // total 에서 num 을 나누면 모든 수의 평균값이 된다.
  // 만약에 딱 나눠지고 홀수면 앞뒤로 갯수를 더하면 될것이고.
  // 딱 안나눠지면 나눈값에서 내림을하고 주변 수의 갯수로 배열을 만들고 확인해보자

  const avg = Math.floor(total / num);

  // 갯수가 홀수면
  if (num % 2 === 1) {
    const start = avg - (num - 1) / 2;

    for (let i = start; i < start + num; i++) {
      answer.push(i);
    }
  } else {
    const start = avg - num / 2 + 1;
    for (let i = start; i < start + num; i++) {
      answer.push(i);
    }
  }

  return answer;
}
