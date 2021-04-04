/* 실습 1 */
const bill = {
    orderNum: 20210401,
    orderId: "efubFront",
    name: "이펍",
    address: "서울특별시 서대문구 이화여대길 52"
}

for (let key in bill) {
    console.log(`${key}: ${bill[key]}`);
}

/* 실습 2 */

const array = [1, 2, 3, 4, 5];
let newArray=0;

for(let i=0 ; i<array.length; i++){
    newArray = array[i]*3;
    if(newArray%2 == 0){
        console.log(newArray);
    }
}