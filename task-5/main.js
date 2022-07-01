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
    let sum = 0
    let sum2 = 0
    let k =1
    
    for(let i = 0; i<matrix.length;i++){
        for(let k = 0; k<matrix.length;k++){
            let j = matrix.length-(i+1)
    if(i==k){
        sum=sum +matrix[i] [k]
    }else if(j==k){
    sum2 = sum2 + matrix[i] [k]
    }
        }
    }console.log(sum);
    console.log(sum2);
});
