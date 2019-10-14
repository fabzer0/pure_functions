// Duplicating strings a number of times
const duplicate = (str, n) => n < 1 ? '' : str + duplicate(str, n-1);

const ans = duplicate('toptal!', 5);
console.log(ans); // 'toptal!toptal!toptal!toptal!toptal!'





