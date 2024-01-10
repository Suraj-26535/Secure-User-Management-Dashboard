// src/services/api.ts
const BASE_URL = 'https://reqres.in/api';

export const authService = {
  signIn: (credentials: { email: string; password: string }) =>
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((response) => response.json()),
  signUp: (user: { email: string; password: string }) =>
    fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => response.json()),
};

export const dataService = {
  fetchData: () => fetch(`${BASE_URL}/data`).then((response) => response.json()),
};
