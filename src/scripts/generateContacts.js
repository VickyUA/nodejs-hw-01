import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const contactsToAdd = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    contacts.push(...contactsToAdd);
    await writeContacts(contacts);
  } catch (err) {
    console.error('error', err);
  }
};

generateContacts(5);
