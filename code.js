const botonellos = document.querySelectorAll('.Info-mas.Ellos');
const infolista = document.querySelector('.Info.lista');
const infoellos = document.querySelector('.Info.ellos');
const infoellas = document.querySelector('.Info.ellas');
const dressdamas = document.querySelector('.dressdamas');

// Valores iniciales
const fontSizeInicial = '1rem';
const alturaInicial = 'auto';

botonellos.forEach(boton => {
  boton.addEventListener('click', () => {
    const infolistaDisplay = window.getComputedStyle(infolista).display;

    if (infolistaDisplay === 'none') {
      // Mostrar la lista y ajustar "Ellos"
      infolista.style.display = 'block';
      infoellos.style.display = 'block';
      infoellos.style.height = '30rem';
      infoellos.style.fontSize = '1rem';

      // Ocultar "Ellas" y "Dress Damas"
      if (infoellas) infoellas.style.display = 'none';
      if (dressdamas) dressdamas.style.display = 'none';
    } else {
      // Ocultar la lista y restaurar "Ellos"
      infolista.style.display = 'none';
      infoellos.style.display = 'block';
      infoellos.style.height = alturaInicial;
      infoellos.style.fontSize = fontSizeInicial;

      // Volver a mostrar "Ellas" y "Dress Damas"
      if (infoellas) infoellas.style.display = 'block';
      if (dressdamas) dressdamas.style.display = 'block';
    }
  });
});

const botonellas = document.querySelectorAll('.Info-mas.Ellas');
const infolistaa = document.querySelector('.Info.lista.Ellas');
const infoellaas = document.querySelector('.Info.ellas');
const infoelloos = document.querySelector('.Info.ellos');
const dressdamass = document.querySelector('.dressdamas');

// Valores iniciales
const fontSizeIniciaal = '1rem';
const alturaIniciaal = 'auto';

botonellas.forEach(boton => {
  boton.addEventListener('click', () => {
    const infolistaaDisplay = window.getComputedStyle(infolistaa).display;

    if (infolistaaDisplay === 'none') {
      // Mostrar la lista y ajustar "Ellas"
      infolistaa.style.display = 'block';
      infoellaas.style.display = 'block';
      infoellaas.style.height = '30rem';
      infoellaas.style.fontSize = '1rem';

      // Ocultar "Ellos" y "Dress Damas"
      if (infoelloos) infoelloos.style.display = 'none';
      if (dressdamas) dressdamas.style.display = 'none';
    } else {
      // Ocultar la lista y restaurar "Ellas"
      infolistaa.style.display = 'none';
      infoellaas.style.display = 'block';
      infoellaas.style.height = alturaIniciaal;
      infoellaas.style.fontSize = fontSizeIniciaal;

      // Volver a mostrar "Ellos" y "Dress Damas"
      if (infoelloos) infoelloos.style.display = 'block';
      if (dressdamas) dressdamas.style.display = 'block';
    }
  });
});

const botondamaass = document.querySelectorAll('.Info-damas');
const infolistad = document.querySelector('.Info-vestimennta');
const dressdamaass = document.querySelector('.dressdamas');
const infoellaass = document.querySelector('.Info.ellas');
const infoellooss = document.querySelector('.Info.ellos');

// Valores iniciales
const fontSizeIniciaall = '1rem';
const alturaIniciaall = 'auto';

botondamaass.forEach(boton => {
  boton.addEventListener('click', () => {
    const infolistadDisplay = window.getComputedStyle(infolistad).display;

    if (infolistadDisplay === 'none') {
      // Mostrar la lista y ajustar "Damas"
      infolistad.style.display = 'block';
      dressdamaass.style.display = 'block';
      dressdamaass.style.height = '30rem';
      dressdamaass.style.fontSize = '1rem';

      // Ocultar "Ellas" y "Ellos"
      if (infoellaass) infoellaass.style.display = 'none';
      if (infoellooss) infoellooss.style.display = 'none';
    } else {
      // Ocultar la lista y restaurar "Damas"
      infolistad.style.display = 'none';
      dressdamaass.style.display = 'block';
      dressdamaass.style.height = alturaIniciaall;
      dressdamaass.style.fontSize = fontSizeIniciaall;

      // Volver a mostrar "Ellas" y "Ellos"
      if (infoellaass) infoellaass.style.display = 'block';
      if (infoellooss) infoellooss.style.display = 'block';
    }
  });
});





