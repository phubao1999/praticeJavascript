function test (){
    console.log('aaa');
    setTimeout(() => {
        console.log('bbb');
    }, 500);
    console.log('ccc');
}

test();