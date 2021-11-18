function javascript(){
    //untuk menyimpan nilai dlm textarea
    let input = document.getElementById("input_user").value;

    let rd_fibonannci = document.getElementById("rd_fibonannci");
    let rd_ganjil = document.getElementById("rd_ganjil");
    let rd_genap = document.getElementById("rd_genap");
    let rd_charnum = document.getElementById("rd_charnum");

    let output_fibonannci = document.getElementById("output_fibonannci");
    let output_ganjil = document.getElementById("output_ganjil");
    let output_genap = document.getElementById("output_genap");
    let output_charnum = document.getElementById("output_charnum");
    
    const vowel = "aiueoAIUEO";

    //Script Deret Bilangan Fibonannci
    let fibonannaci1 = 0;
    let fibonannci2 = 1;
    let x;
    let fibonannci = [];
        for(let i in input){
            fibonannci.push(fibonannaci1.toString());
            x = fibonannaci1 + fibonannci2;
            fibonannaci1 = fibonannci2;
            fibonannci2 = x;
        }
        console.log(fibonannci);
    
    //Script Deret Bilangan Ganjil
    let ganjil = 1;
    let bil_ganjil = [];
        for(let i in input){
            bil_ganjil.push(ganjil.toString());
            ganjil = ganjil + 2;
        }
        console.log(bil_ganjil);

    //Script Deret Bilangan Genap
    let genap = 0;
    let bil_genap = [];
        for(i in input){
            genap = genap + 2;
            bil_genap.push(genap.toString());
        }
        console.log(bil_genap);

    //Script Deret CharNum
    let x1 = 'abcdefghijklmnopqrstuvwxyz';
    let x2 = 0;
    let charnum = [];
        for(i in input){
            x2 ++;
            charnum.push(x2.toString());
            charnum.push(x1[i]);
        }
        console.log(charnum);

    //Membuat Object
    const object = {_fibonannci : fibonannci, _ganjil : bil_ganjil,_genap : bil_genap, _charnum : charnum};
   
    //Looping Jika Checked Radio Button Fibonannci
        let hasil_rd_fibonannci = [];
        let y1 = 0;
            if(rd_fibonannci.checked == true){
              for(i in input){
                    if(vowel.includes(input[i])){
                        hasil_rd_fibonannci.push(object._fibonannci[y1]);
                         y1 ++;
                    }
                     else{ hasil_rd_fibonannci.push(input[i]);
                   }
                 }
            }
             else{
            hasil_rd_fibonannci.push(" ");
             }
        output_fibonannci.innerHTML ="" + hasil_rd_fibonannci.join("");

        //Looping Jika Checked Radio Button Bilangan Ganjil
        let hasil_rd_ganjil = [];
        let y2 = 0;
            if(rd_ganjil.checked == true){
                for(i in input){
                    if(vowel.includes(input[i])){
                        hasil_rd_ganjil.push(object._ganjil[y2]);
                        y2 ++;
                    }
                    else{
                        hasil_rd_ganjil.push(input[i]);
                    }
                }
            }
            else{
                hasil_rd_ganjil.push(" ");
            }
            output_ganjil.innerHTML = "" +hasil_rd_ganjil.join("");

        //Looping Jika Checked Radio Button Bilangan Genap
        let hasil_rd_genap = [];
        let w3 = 0;
            if(rd_genap.checked == true){
                for(i in input){
                    if(vowel.includes(input[i])){
                        hasil_rd_genap.push(object._genap[w3]);
                        w3 ++ ;
                    }
                    else{
                        hasil_rd_genap.push(input[i]);
                    }
                }
            }
            else{
                hasil_rd_genap.push(" ");
            }
            output_genap.innerHTML = "" +hasil_rd_genap.join("");


        //Looping Jika Checked Radio Button Bilangan CharNum
        let hasil_rd_charnum = [];
        let y4 = 0;
            if(rd_charnum.checked == true){
                for(i in input){
                    if(vowel.includes(input[i])){
                        hasil_rd_charnum.push(object._charnum[y4]);
                        y4 ++;
                    }
                    else{
                        hasil_rd_charnum.push(input[i]);
                    }
                }
            }
            else{
                hasil_rd_charnum.push(" ");
            }
            output_charnum.innerHTML = " " +hasil_rd_charnum.join("");
            
}
