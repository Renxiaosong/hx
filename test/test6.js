/**
 * 除去ccc，重复最多的字符串
 */
function test(){
    let str = 'aaa is bbb and ccc,bbb add ccc as ccc.';
    const arr = ['ccc']
    str = str.replace(',',' ');
    str = str.replace('.',"");
    const strs = str.split(' ')
    const obj = {};
    for(let i =0;i<strs.length;i++){
        const item = strs[i];
        for(let it of arr){
            if(it !== item){
                if(!obj.hasOwnProperty(item)){
                    obj[item]=1;
                }else{
                    obj[item] ++;
                }
            }
        }
    }
    return obj;
}

function testV() {
    const obj = test();
    let sort = [];
    for(let k in obj){
        sort.push(obj[k])
    }
    // sort.sort((a,b)=>{return a-b<0})
    // const max = sort[0]
    const max = Math.max.apply(Math,sort)
    console.log(max)
    let  result ='';
    for(let k in obj){
        if(max===obj[k]){
            result = k;
        }
    }
    return result;
}

// const res = testV()
// console.log(res)


/**
 * 冒泡排序
 * @param arr
 * @returns {*}
 */
function test2(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            let temp = 0;
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
            }
        }
    }
    return arr;
}

/**
 * 升序排列
 * @param arr
 */
function tess3(arr) {
    arr.sort((a,b)=>{
        return a-b<0;
    })
    console.log(arr)
}


function quickSort(arr) {

}


function sort() {
    var map = {"1":3, "2":5, "3":6, "4":1};
    var keys = ["1", "2", "3", "4"];
    var result = [];
    map["max"] = 999999999; // 存放每一次拍完序后的，该过程中产生的最大的元素。

    for(var i=0; i<keys.length; i++) {
        var temp = -1;
        for( var k=0; k<keys.length; k++) {
            // 和上次循环产生的最大值进行比较
            if(map[keys[k]] >= map[ "max"]) {
                continue;
            }

            if(temp < map[keys[k]]) {
                temp = map[keys[k]];
            }
        }
        result[i] = temp;
        map[ "max"] = temp;
    }

    console.log(result);
}

const array = [1,3,5,2,4];
// const result = test2(array)
// console.log(result)
// tess3(array)
quickSort(array)
// sort()

