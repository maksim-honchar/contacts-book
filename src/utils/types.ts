export interface Contact {
    name: string
    lastname: string
    age: number
    pager: number
    id: string
  }

export interface InitialState {
    contactsList: Contact[] | [],
    status: string,
    error: null | string
  }
