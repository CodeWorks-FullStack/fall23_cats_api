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
    // NOTE this will all change tomorrow, weird unique id assigner
    if (fakeDb.cats.length == 0) {
      catData.id = 1
    }
    else {
      const catIds = fakeDb.cats.map(cat => cat.id)
      const largestCatId = Math.max(...catIds)
      catData.id = largestCatId + 1
    }

    const newCat = new Cat(catData)
    await fakeDb.cats.push(newCat)
    return newCat
  }

  async destroyCat(catId) {
    const catIndex = fakeDb.cats.findIndex(cat => cat.id == catId)

    if (catIndex == -1) {
      throw new BadRequest(`Invalid ID: ${catId}`)
    }

    await fakeDb.cats.splice(catIndex, 1)
  }
}

export const catsService = new CatsService()