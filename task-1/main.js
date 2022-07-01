const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var array_n = input.split(','); // ['5', '2 4 7 12 9']
    let array_3 = []
    for(let i = 0; i<array_1.length;i++){
       if(!array_2.includes(array_1[i])){
        array_3.push(array_1[i])
       }
    }
});
