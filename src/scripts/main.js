 // Defina a data-alvo para o countdown
 const dataAlvo = new Date("2024-12-24T00:00:00").getTime();
  
 // Atualize o contador a cada segundo
 const contador = setInterval(() => {
   const agora = new Date().getTime();
   const diferenca = dataAlvo - agora;
 
   if (diferenca <= 0) {
     clearInterval(contador);
     document.getElementById("countdown").innerHTML =
       "Contagem regressiva concluída! Chegou a hora!";
   } else {
     const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
     const horas = Math.floor(
       (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     const minutos = Math.floor(
       (diferenca % (1000 * 60 * 60)) / (1000 * 60)
     );
     const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
 
     document.getElementById("days").textContent = padZero(dias);
     document.getElementById("hours").textContent = padZero(horas);
     document.getElementById("minutes").textContent = padZero(minutos);
     document.getElementById("seconds").textContent = padZero(segundos);
   }
 }, 1000);
 
 function padZero(num) {
   return num.toString().padStart(2, "0");
 }