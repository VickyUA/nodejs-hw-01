import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    console.log(data);
    return JSON.parse(data);
  } catch (err) {
    console.error('Помилка', err);
  }
};
