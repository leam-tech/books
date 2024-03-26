import * as vite from 'vite';

export const getEnvDefinitions = (root) => {
  const envs = vite.loadEnv('', root);
  return {
    __FRAPPE_BOOKS_SERVER_URL__: JSON.stringify(
      envs['VITE_FRAPPE_BOOKS_SERVER_URL']
    ),
  };
};
