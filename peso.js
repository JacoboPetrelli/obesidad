let masa = Number(prompt("Ingrese su peso en kg"))
let estatura = Number(prompt("Ingrese su estatura en m"))
let imc = masa/(estatura^2)
let tipo
if (imc < 18.5) {
    tipo = "Bajo peso"
}else{
    if (imc <= 24.9) {
        tipo = "normal"
    }else{
        if (imc <= 30) {
            tipo = "Obesidad"
        }else{
            if (imc <= 34.9) {
                tipo = "Obesidad clase I"
            }else{
                if (imc <= 39.9) {
                    tipo = "Obesidad clase II"
                }else{
                    tipo = "Obesidad clase III"
                    
                    
                }
            }
        }
    }
}
document.getElementById ("IMC").innerHTML= "Su IMC esta en la clasificación "+tipo







