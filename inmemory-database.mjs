export class InmemoryDatabase {
    #attempt = 1
    #data = []

    constructor() {}

    add(name, random) {
        this.#attempt++;
        this.#data.push({ attempt: `${name} ${this.#attempt}`, value: random })
    }

    getAttempts(){
        return this.#data
    }
}
