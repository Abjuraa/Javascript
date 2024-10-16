// URL de la API
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Usamos fetch para hacer una solicitud GET
fetch(apiURL)
  .then(response => {
    // Convertimos la respuesta a formato JSON
    return response.json();
  })
  .then(data => {
    // Aquí se maneja la data recibida
    console.log('Lista de usuarios:', data);
  })
  .catch(error => {
    // En caso de error, lo manejamos aquí
    console.error('Hubo un error al obtener los usuarios:', error);
  });
