export interface Contact {
    id: string
    firstName: string
    email: string
    phone?: string
}

export class AddressBook {
  private contacts: Contact[] = []

  addContact(contact: Contact): void {
    this.contacts.push(contact)
  }

  removeContact(id: string): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id)
  }

  searchContact(search: string): Contact[] {
    return this.contacts.filter((contact) => {
      return contact.firstName.includes(search) ||
          contact.email.includes(search) || (contact.phone && contact.phone.includes(search))
    })
  }

  modifyContact(id: string, contact: Contact): void {
    this.contacts = this.contacts.map((c) => {
      if (c.id === id) {
        return contact
      }

      return c
    })
  }
}