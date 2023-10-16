// NOTE this will change tomorrow

import { Cat } from "../models/Cat.js";


class FakeDb {
  constructor () {
    this.cats = [
      new Cat({ name: 'Gopher', color: 'Black', hasTail: true, id: 1, personality: 'shy' }),
      new Cat({ name: 'Georgie', color: 'Gray and White', hasTail: true, id: 2 }),
      new Cat({ name: 'Dudley', color: 'Orange', hasTail: false, id: 3, personality: 'simple' }),
    ]
  }
}

export const fakeDb = new FakeDb()