import { fakeDb } from "../db/FakeDb.js"
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
}

export const catsService = new CatsService()