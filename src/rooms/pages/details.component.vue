<template>
    <div class="details-container">
      <h1 class="titulo">Habitación para una persona</h1>
      <div class="contenedor">
        <div class="item item1"><img src="https://media.discordapp.net/attachments/1146490170917535764/1156281920133546064/image1.jpg?ex=651466f4&is=65131574&hm=cf228775b07cc483c4fc162ffaf858239a18a1b16581817a87e87b399270355c&=&width=720&height=480" alt="Habitación para una persona" class="habitacion" /></div>
        <div class="item item2">  <p>
          <b>Detalles:</b><br />
          <br />
          Av. Paseo de la República, Chorrillos - Lima<br />
          4.3<br />
          Cerca a UPC Villa<br />
          <br />
          <b>Descripción:</b><br />
          <br />
          Espacio ideal para que los estudiantes puedan descansar, cuenta con una cama cómoda y servicios higiénicos. Ven, recarga tus energías, relájate y disfruta de un merecido descanso!
          <br />
          S/. 5 x hora <button class="boton">Reservar</button>
        </p></div>
      </div>
      
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: true, // Establecer isOpen en true para que esté abierto automáticamente
      };
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Jost', sans-serif;
  }
  .contenedor{
    display: flex;
    gap: 6rem;
    padding: 5%;
    align-items: center;
    
  }
  .details-container{
    position:relative;
    height: 60vh;
    background-color: #F2F2F2;
    padding: 2%;
    margin: 20%;
    margin-top: 5%;
    border-radius: 0.5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .titulo {
    text-align: center;
    color: #3498DB;
    margin-bottom: 0.3%;
  }
  
  .habitacion {
    width: 110%; /* Ancho deseado para la imagen */
    height: 90%; /* Altura deseada para la imagen */
  }
  
  .boton {
    background-color: #3498DB;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  
  
  </style>
  