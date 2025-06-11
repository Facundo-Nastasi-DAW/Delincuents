import Cookies from 'js-cookie'; // Este debería funcionar en la mayoría de proyectos Vite/Next/React



const TOKEN_KEY = 'token';
const USERNAME_KEY = 'userName';

export const setAuthCookies = (token: string, userName: string) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
  });
  Cookies.set(USERNAME_KEY, userName, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
  });
};

export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const getUserName = (): string | undefined => {
  return Cookies.get(USERNAME_KEY);
};

export const clearAuthCookies = () => {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(USERNAME_KEY);
};
