let a = "{{{(({}))[]]]";

a = a.split("")

const res = new Map();

for(let i = 0 ; i < a.length; i++){
    if(res.has(a[i])){
        let k = res.get(a[i])
        res.set(a[i], k+1 )
    }
    else{
        res.set(a[i],1)
    }
}

console.log(res);
