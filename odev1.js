/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if ) */

function asal(...numbers){
    for (let j = 0; j < numbers.length; j++) {
        for (let i = 2; i <= numbers[j] ; i++) {
            if (numbers[j] % i ==0){

                if(numbers[j]==i){
                 console.log(numbers[j])
                }
                else{
                    break
                }
            }
        }
    }
}
// asal(5,7,9,11,14,15,35,77)


/* 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
 (Arkadaş sayılar için google) */
/*
 function dost(sayi1,sayi2){
    toplam1=0
    toplam2=0
    for (let i = 1; i < sayi1; i++){
        
        if (sayi1 % i ==0){
            toplam1+=i
        }
    }
    for (let i=1; i < sayi2;i++){

        if (sayi2 % i ==0){
            toplam2+=i
        }
    }

    if (sayi1==toplam2 && sayi2==toplam1)
    console.log(sayi1,sayi2)

    }

    dost(220,284)
    dost(1184,1210)
*/
    /* 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız. */

    /*
    function mukemmel(sayi){
        toplam=0
        for (let i = 1; i <= sayi; i++){
            
            if (sayi % i ==0){
                toplam+=i
            }
        }

        if (toplam == 2*sayi){
            console.log(sayi)
        }
    }

    mukemmel(496)
*/
    /* 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */

    function asalsayilar(){
        asalsayilar_=[]
        for (let j =2 ; j<=1000; j++){
            for (let i = 2; i <= j ; i++) {
                if (j % i ==0){

                    if(j==i){
                     //console.log(j)
                    asalsayilar_.push(j)
                    
                    }
                    else{
                        break
                    }
                }
            }
        }
        console.log(asalsayilar_)
    }
    asalsayilar()


   