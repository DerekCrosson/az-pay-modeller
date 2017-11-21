export const AUTH_CONFIG = {
  domain: 'qzpaymodeller.eu.auth0.com',
  clientId: 'govXTTACMSz5ttGDh9jLaTY34BQO8t4B',
  callbackUrl: process.env.NODE_ENV === 'production' ? 'https://azpaymodeller.herokuapp.com/callback' : 'http://app.local:3000/callback'
}
