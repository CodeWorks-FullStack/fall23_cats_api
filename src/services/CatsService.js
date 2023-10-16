import { fakeDb } from "../db/FakeDb.js"
import { Cat } from "../models/Cat.js"
import { BadRequest } from "../utils/Errors.js"

class CatsService {


  async getCats() {
    const cats = await fakeDb.cats

    return cats
  }
  async getCatById(catId) {
    const foundCat = await fakeDb.cats.find(cat => cat.id == catId)

    if (!foundCat) {
      throw new BadRequest(`This ID is not valid: ${catId}`)
    }

    return foundCat
  }

  async createCat(catData) {



    catData.id = fakeDb.cats.length + 1
    const newCat = new Cat(catData)
    fakeDb.cats.push(newCat)
    return newCat
  }

  async destroyCat(catId) {
    const catIndex = fakeDb.cats.findIndex(cat => cat.id == catId)

    if (catIndex == -1) {
      throw new BadRequest(`Invalid ID: ${catId}`)
    }

    fakeDb.cats.splice(catIndex, 1)
  }
}

export const catsService = new CatsService()