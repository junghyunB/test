// 1번문제 피보나치

function fibonacci(n) {
    let arr = [0, 1];   
    for(i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr[n]);
}

fibonacci(10);

// 2번 문제

function solution(absolutes, signs) {
    let res = 0;
    if((absolutes.length >= 1 && absolutes.length <= 1000)) {
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] > 0) {
           res += absolutes[i];
    } else{ 
    res -= absolutes[i];
    }
  }
}
    return console.log(res);
}

solution([1, 5, 9], [true, false, true]);

//3번 문제 
function sol(nums) {
    let answer = 0, number=0;
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let l = j + 1; l < nums.length; l++){
                number = nums[i] + nums[j] + nums[l];
                let count = 0;
                for(let k = 1; k <= number; k++){
                    if(number % k == 0) count++;
                }
                if(count == 2) answer++;
            }
        }
    }
    return console.log(answer);
}

sol([1,2,3,4,5])
