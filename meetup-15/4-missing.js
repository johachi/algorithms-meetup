

function findMissing(numbers){
  let back = numbers.length -1
  let front = 0
  let cache = numbers[front];
  numbers[front] = 0
  let cached = true

  while(front < back && cache){
    if(cached){
      val = cache;
      cached = false
    } else {
      val = numbers[front]
      numbers[front] = 0
      front++
    }
    
    if(val > back + 1){
      cache = numbers[back];
      numbers[back] = val;
      back--;
    } else {
      if(val === numbers.length - 1){
        back--
      }
      cache = numbers[val - 1]
      cached = true
      numbers[val -1] = val;
    }
  }
  console.log(numbers)
}

findMissing([3,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1])