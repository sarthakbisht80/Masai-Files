
// let arr=[9,8,1,6,4,3,24,6];
function bubbleSort(arr,n){
  for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i ;j++){
      if(arr[j] > arr[j+1]){
        [arr[j] ,arr[j+1]] =[arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([9,8,1,6,4,3,24,6],8));