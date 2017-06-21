export const AppConfig = {
  production: false,
  //auth_url: 'https://afiliamedicatech1.bitnamiapp.com:8443/auth',
  //api_url: 'https://afiliamedicatech1.bitnamiapp.com:443'
  //authUrl: 'http://afiliamedicatech1.bitnamiapp.com:1780/api',
  authUrl: 'http://afiliamedicatech1.bitnamiapp.com:8443',  
  apiUrl: 'http://afiliamedicatech1.bitnamiapp.com:1780/api',
  tokenName: 'token',
  user: {
    register: '/auth/register',
    login: '/auth/login'
  },
  books: '/books'
};
