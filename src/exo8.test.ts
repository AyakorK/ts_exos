import { AddressBook, Contact } from './exo8';
describe('AddressBook', () => {
  let addressBook: AddressBook;

  beforeEach(() => {
    addressBook = new AddressBook();
  });

  test('should add a contact', () => {
    const contact: Contact = { id: '1', firstName: 'John', email: 'john@example.com' };
    addressBook.addContact(contact);

    expect(addressBook.searchContact('John')).toContainEqual(contact);
  });

  test('should remove a contact', () => {
    const contact: Contact = { id: '1', firstName: 'John', email: 'john@example.com' };
    addressBook.addContact(contact);

    addressBook.removeContact('1');

    expect(addressBook.searchContact('John')).toHaveLength(0);
  });

  test('should search contacts by name', () => {
    const contact1: Contact = { id: '1', firstName: 'John', email: 'john@example.com', phone: '1234567890' };
    const contact2: Contact = { id: '2', firstName: 'Taïga', email: 'taïga@example.com' };
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    const results = addressBook.searchContact('john');

    expect(results).toContainEqual(contact1);
    expect(results).not.toContainEqual(contact2);
  });

  test('should search contacts by email', () => {
    const contact1: Contact = { id: '1', firstName: 'John', email: 'john@example.com', phone: '1234567890' };
    const contact2: Contact = { id: '2', firstName: 'Taïga', email: 'taïga@example.com' };
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    const results = addressBook.searchContact('taïga@example.com');

    expect(results).toContainEqual(contact2);
    expect(results).not.toContainEqual(contact1);
  });

  test('should search contacts by phone', () => {
    const contact1: Contact = { id: '1', firstName: 'John', email: 'john@example.com', phone: '1234567890' };
    const contact2: Contact = { id: '2', firstName: 'Taïga', email: 'taïga@example.com' };
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    const results = addressBook.searchContact('1234567890');

    expect(results).toContainEqual(contact1);
    expect(results).not.toContainEqual(contact2);
  });

  test('should modify a contact', () => {
    const contact: Contact = { id: '1', firstName: 'John', email: 'john@example.com' };
    addressBook.addContact(contact);

    const updatedContact: Contact = { id: '1', firstName: 'John', email: 'updated@example.com' };
    addressBook.modifyContact('1', updatedContact);

    expect(addressBook.searchContact('updated@example.com')).toContainEqual(updatedContact);
  });
});
