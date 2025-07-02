import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push({ id: 7, name: 'Vicky' });
    await writeContacts(contacts);
  } catch (err) {
    console.error('oops', err);
  }
};

addOneContact();
