function calcular(){
  

    let elementoN1 = document.getElementById("n1").value
    let elementoN2 = document.getElementById("n2").value
    let elementoN3 = document.getElementById("n3").value
    let elementoN4 = document.getElementById("n4").value

   
    let n1 = parseFloat(elementoN1)
    let n2 = parseFloat(elementoN2)
    let n3 = parseFloat(elementoN3)
    let n4 = parseFloat(elementoN4)

    let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2)
    
     let txt = media + " "

    let passou;

    if(media >= 6){
        alert ("Sua média é igual a " + media + " Parabéns, você foi aprovado!!")
      
    } else {
        alert ("Que pena! Sua média é igual a " + media + ", voce foi reprovado!")
    }
  console.log(txt)
     }


