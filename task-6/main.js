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

    for(let i = 0; i<matrix_2.length;i++){
        for(let j = 0; j<matrix_2[i].length;j++){
         if(matrix_2[i][j]==1){
            sum = sum + matrix_1[i][j]
         }
          
        }
    }console.log(sum);
});
