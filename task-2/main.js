const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var arr = input.split(','); // ['5', '2 4 7 12 9']
    let arr2 = []

    for(let i = 0; i<array.length;i++){
    if(!arr2.includes(array[i])){
    arr2.push(array[i])
    }
    }console.log(arr2.length);
});
