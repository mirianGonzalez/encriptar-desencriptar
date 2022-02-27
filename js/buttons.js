//Botones de enlaces a las funciones
var buttonEncrypt = document.querySelector("#btn-encrypt");
var buttonDecrypt = document.querySelector("#btn-decrypt");
var buttonCopy = document.querySelector("#btn-copy");

//Botón para cifrar
buttonEncrypt.addEventListener("click", function (event) {
    event.preventDefault();
    var input = captureInput();

    //Validación y mensaje de error
    var error = validateString(input);
    if (error) {
        errorMsg();
        return;
    }
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    //Función de llamada a la encriptación
    var encryptedString = encrypt(input);

    //Salida de palabra cifrada
    output(encryptedString);

});

//Botón de descifrar
buttonDecrypt.addEventListener("click", function (event) {
    event.preventDefault();
    var input = captureInput();

    //Validación y mensaje de error
    var error = validateString(input);
    if (error) {
        errorMsg();
        return;
    }
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    //Llamando a la función de descifrado
    var decryptedString = decrypt(input);

    //Salida de palabra descifrada
    output(decryptedString);

});

//Botón Copiar
buttonCopy.addEventListener("click", function (event) {
    event.preventDefault();

    //Función de copia de llamada
    copy();
});