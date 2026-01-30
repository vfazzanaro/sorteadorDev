function generateNumber() {

   const min = Math.ceil(document.querySelector('.input-min').value);
   const max = Math.floor(document.querySelector('.input-max').value);
   const result = Math.floor(Math.random() * (max - min + 1)) + min;
   if (min > max) {
      alert("O valor mínimo deve ser menor que o valor máximo.");
   } else {
      document.getElementById("resultado").innerHTML = `Número sorteado: <strong>${result}</strong>`;
   }
}
