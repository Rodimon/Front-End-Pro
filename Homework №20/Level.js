let lvl = 1
class Level {
    constructor() {
        this.lvl = lvl
        this.p = document.querySelector("p")
    }
    addCount() {
        lvl++
        this.p.innerHTML = lvl - 1
    }
    Zero() {
        lvl = 1
        this.p.innerHTML = 0
    }
    getLvl() {
        return this.lvl
    }
}