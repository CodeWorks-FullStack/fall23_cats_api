import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor () {
    super('api/cats')
    this.router.get('', this.getCats)
  }

  getCats(request, response, next) {
    response.send('Here is your response!')
  }
}