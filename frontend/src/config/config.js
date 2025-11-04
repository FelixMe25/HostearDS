// Configuración de URLs para desarrollo y producción
const config = {
  development: {
    API_URL: 'http://localhost:5000'
  },
  production: {
    API_URL: process.env.REACT_APP_API_URL || 'https://your-vercel-app.vercel.app/api'
  }
};

const currentConfig = config[process.env.NODE_ENV] || config.development;

export const API_URL = currentConfig.API_URL;

export default currentConfig;