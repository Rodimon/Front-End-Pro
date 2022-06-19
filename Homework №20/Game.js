class Game {
    constructor() {
        this.lvl = new Level().getLvl()
        this.interval = 1000 / this.lvl
    }
    start() {
        this.balls = []
        this.intervalStart = setInterval(() => {
            this.balls.push(new Controlball().init())
        }, this.interval)
    }
    gameOver() {
        new Level().Zero()
        clearInterval(this.intervalStart)
        this.balls.forEach(el => el.destroy())

    }
}
new Game().start()