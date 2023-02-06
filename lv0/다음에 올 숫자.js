function solution(common) {
  var answer = 0;
  // 값을 입력 받아서 맨뒤와 맨 뒤 앞을 검증한다.
  // 맨뒤 두개를 빼보고 맨뒤에서 두번째 세번째를 빼서 값이 같은지를 본다.
  // 같다면 등차 다르면 등비

  const len = common.length;
  const a = common[len - 1] - common[len - 2];
  const b = common[len - 2] - common[len - 3];
  let isMinus = false;
  if (a === b) {
    isMinus = true;
  }

  if (isMinus) {
    answer = common[len - 1] + (common[len - 1] - common[len - 2]);
  } else {
    answer = common[len - 1] * (common[len - 1] / common[len - 2]);
  }

  return answer;
}

function solution2(common) {
  // 값을 입력 받아서 0,1,2번 인덱스를 검증한다.
  // 1,2 를 빼보고 맨뒤에서 0,1을 빼서 값이 같은지를 본다.
  // 같다면 등차 다르면 등비

  return common[1] - common[0] === common[2] - common[1]
    ? common[common.length - 1] * 2 - common[common.length - 2]
    : common[common.length - 1] *
        (common[common.length - 1] / common[common.length - 2]);
}
