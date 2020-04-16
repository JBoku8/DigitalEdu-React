import Person from './Person';

export default class Developer extends Person {
  constructor(firstName, lastName, position) {
    super(firstName, lastName);

    this.position = position;
  }
}
