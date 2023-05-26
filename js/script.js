const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const texto = textArea.value;
    if (/[\u0300-\u036f\u00c0-\u017f]/.test(texto) || texto !== texto.toLowerCase()) {
        alert("El texto no puede contener acentos o letras mayúsculas.");
        return;
    }
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    document.querySelector(".container_txt").style.display = "none";
}

function encriptar(stringEncriptar){
    let  matrixCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptar = stringEncriptar.toLowerCase()
    
    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptar.includes(matrixCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptar
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.querySelector(".container_txt").style.display = "none";
}

function desencriptar(stringDesencriptar){
    let  matrixCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptar = stringDesencriptar.toLowerCase()
    
    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringDesencriptar.includes(matrixCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    }
    return stringDesencriptar
}

function btnCopiar() {
    const mensajeValue = mensaje.value;
    navigator.clipboard.writeText(mensajeValue);
}