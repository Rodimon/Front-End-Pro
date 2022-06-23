const Worker = {
    name: "",
    surname: "",
    rate: 0,
    days: 0,
    getSalary: () => {
        console.log(this.rate * this.days)
    },
}
const Consultant = {
    products: [],
    giveAdvice: () => {
        console.log(products[0])
    },
    _prototype_: Worker,
}
const Cashier = {
    price: 0,
    Sell: () => {
        console.log(price)
    },
    _prototype_: Worker,
}
const Admin = {
    Workers: [],
    HireWorker: () => {
        console.log(Worker[0])
    },
    _prototype_: Worker,
}