class Controlball {
    constructor() {
        this.lvl = new Level().getLvl()
        this.size = 100 / Number(`1.${this.lvl}`)
        this.speed = 2 * this.lvl
        this.interval = 50
        this.count = 0
    }
    init() {
        this.generateBall()
        this.move()
        return this.ball
    }
    generateBall() {
        this.ball = new Ball(this.generateX(), this.size)
        this.ball.addEventListener('click', () => {
            this.lvl = new Level().addCount()
            this.destroy()
        })
    }
    generateX() {
        this.num = Math.ceil(Math.random() * window.innerWidth) - this.size
        while (this.num < 0) this.num = Math.ceil(Math.random() * window.innerWidth) - this.size
        return this.num
    }
    destroy() {
        this.ball.remove()
        delete this
    }
    move() {
        let y = 0
        this.moveInterval = setInterval(() => {
            y += this.speed
            this.ball.style.top = `${y}px`
            if (y > window.innerHeight - this.size) {
                clearInterval(this.moveInterval)
                this.destroy()
                new Game().gameOver()
            }
        }, this.interval)
    }
}