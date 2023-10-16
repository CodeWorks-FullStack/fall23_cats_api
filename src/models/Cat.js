// NOTE this all changes tomorrow

export class Cat {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.color = data.color
    this.hasTail = data.hasTail
    this.personality = data.personality || 'spicy'
  }
}