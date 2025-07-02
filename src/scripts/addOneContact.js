import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const contactsToAdd = faker.helpers.multiple(createFakeContact, {
      count: 1,
    });
    contacts.push(...contactsToAdd);
    await writeContacts(contacts);
  } catch (err) {
    console.error('error', err);
  }
};

addOneContact();
