import { AppEnv } from 'app/app-env';

const apiBaseURL = 'http://localhost:3000/';

export const environment: AppEnv = {
  api: {
    skills: apiBaseURL + 'skills',
    paths: apiBaseURL + 'paths',
    contacts: apiBaseURL + 'contacts',
  },
};
