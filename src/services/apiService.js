// src/api.js

//LOCAL HOST
//const BASE_API_URL = 'http://localhost:3001/api'; 

//DESPLEGADO
const BASE_API_URL = 'http://3.22.81.127:3000/api';


const LOGIN_URL = BASE_API_URL + '/auth/login';
const REGISTER_URL = BASE_API_URL + '/auth/register';
const GENERATE_SONG_URL = BASE_API_URL + '/openai/generate-song';

export const login = async (correo, contrasenia) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correo, contrasenia })
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const register = async (nombre, apellido, ci, direccion, telefono, correo, contrasenia, foto) => {
  try {
    const response = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, ci, direccion, telefono, correo, contrasenia, foto })
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Nueva función para hacer la petición GET
export const generateSong = async (title, author) => {
  try {
    const response = await fetch(`${GENERATE_SONG_URL}?title=${title}&author=${author}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error generating song');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
