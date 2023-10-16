import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";

export class CatsController extends BaseController {
  constructor () {
    super('api/cats')
    this.router
      .get('/test', this.test)
      .get('', this.getCats)
      .get('/:catId', this.getCatById)
  }

  test(request, response, next) {
    response.send('Here is your response!')
  }

  async getCats(request, response, next) {
    try {
      const cats = await catsService.getCats()

      // NOTE triggers catch
      // throw new BadRequest('Testing error')

      return response.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async getCatById(request, response, next) {
    try {
      const catId = request.params.catId
      // return response.send(`GETTING CAT BY ID, HERE IS THE ID YOU SUPLLIED IN THE URL ${catId}`)
      const cat = await catsService.getCatById(catId)
      return response.send(cat)
    } catch (error) {
      next(error)
    }
  }


}