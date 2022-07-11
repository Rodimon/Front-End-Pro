let id = 1,
    api = `https://pokeapi.co/api/v2/pokemon/`,
    pagination = document.querySelector(".pagination"),
    current = document.querySelector(".current-pokemon"),
    list = document.querySelector(".name-list"),
    pokemons = JSON.parse(sessionStorage.getItem('pokemons')),
    favorites = JSON.parse(sessionStorage.getItem('favorite')),
    region = document.querySelector(".region"),
    type = document.querySelector(".type")
if (!pokemons) {
    pokemons = []
}
if (!favorites) {
    favorites = []
}
function createPag(index, elem) {
    let pag = document.createElement("button")
    pagination.appendChild(pag)
    pag.innerHTML = index + 1
    pag.id = elem
    pag.className = "pag-button"
    pag.addEventListener("click", () => {
        current.querySelectorAll(".block").forEach(el => el.style.visibility = "hidden")
        current.querySelectorAll(`.block`)[index].style.visibility = "visible"
    })
}
region.addEventListener("click", () => {
    let api = `https://pokeapi.co/api/v2/region/`
    fetch(api)
        .then(arg => arg.json())
        .then(json0 => {
            pagination.querySelectorAll("div").forEach(el => el.replaceWith(...el.childNodes))
            for (let i = 1; i < json0.results.length; i++) {
                let api = `https://pokeapi.co/api/v2/region/${i}`
                fetch(api)
                    .then(arg => arg.json())
                    .then(json1 => {
                        let api = json1.pokedexes[0].url
                        fetch(api)
                            .then(arg => arg.json())
                            .then(json2 => {
                                let div = document.createElement("div"),
                                    pags = document.querySelectorAll(".pag-button")
                                pagination.appendChild(div)
                                pags.forEach((elem) => {
                                    let api = `https://pokeapi.co/api/v2/pokemon/${+elem.id + 1}/`
                                    fetch(api)
                                        .then(arg => arg.json())
                                        .then(json3 => {
                                            json2.pokemon_entries.forEach(el => {
                                                if (el.pokemon_species.name == json3.name) {
                                                    div.appendChild(elem)
                                                }
                                            })

                                        })
                                })
                            }
                            )
                    }
                    )
            }
        })
})
type.addEventListener("click", () => {
    let api = `https://pokeapi.co/api/v2/type/`
    fetch(api)
        .then(arg => arg.json())
        .then(json0 => {
            pagination.querySelectorAll("div").forEach(el => el.replaceWith(...el.childNodes))
            for (let i = 1; i < json0.results.length - 1; i++) {
                let api = `https://pokeapi.co/api/v2/type/${i}`
                fetch(api)
                    .then(arg => arg.json())
                    .then(json1 => {
                        let div = document.createElement("div"),
                            pags = document.querySelectorAll(".pag-button")
                        pagination.appendChild(div)
                        pags.forEach((elem) => {
                            let api = `https://pokeapi.co/api/v2/pokemon/${+elem.id + 1}/`
                            fetch(api)
                                .then(arg => arg.json())
                                .then(json2 => {
                                    json1.pokemon.forEach(el => {
                                        if (json2.name == el.pokemon.name) {
                                            div.appendChild(elem)
                                        }
                                    })

                                })
                        })
                    })
            }
        })
})
function createBlock(elem, index) {
    let api = `https://pokeapi.co/api/v2/pokemon/${index + 1}/`
    fetch(api)
        .then(arg => arg.json())
        .then(json => {
            let block = document.createElement("div"),
                button = document.createElement("button"),
                p = document.createElement("p"),
                img = document.createElement("img"),
                favorite = document.createElement("button"),
                restart = document.createElement("button")
            current.appendChild(block)
            block.appendChild(p)
            block.appendChild(img)
            block.appendChild(button)
            block.appendChild(favorite)
            block.appendChild(restart)
            img.src = json.sprites.front_default
            p.innerHTML = `Your selected pokemon is ${elem.name}`
            block.className = `block`
            button.className = "evolution"
            favorite.innerHTML = "Add to favorites"
            button.innerHTML = "View evolutions"
            restart.innerHTML = "Abandon you current pokemons"
            favorites.forEach((el) => {
                if (elem.name == el.name) {
                    favorite.className = "favorite"
                }
            })
            document.querySelectorAll(".block").forEach(el => el.style.visibility = "hidden")
            document.querySelector(".block").style.visibility = "visible"
            button.addEventListener("click", () => {
                api2 = `https://pokeapi.co/api/v2/evolution-chain/${Math.ceil((index + 1) / 3)}/`
                fetch(api2)
                    .then(arg => arg.json())
                    .then(json => {
                        let p = document.createElement("p")
                        block.appendChild(p)
                        p.className = "evolutions"
                        p.innerHTML = `
                            Form 1: ${json.chain.species.name}, <br>
                            Form 2: ${json.chain.evolves_to[0].species.name}, <br>
                            Form 3: ${json.chain.evolves_to[0].evolves_to[0].species.name}`
                    })
            }, { once: true })
            restart.addEventListener("click", () => {
                sessionStorage.removeItem("favorite")
                sessionStorage.removeItem("pokemons")
                location.reload()
            })
            favorite.addEventListener("click", () => {
                if (favorite.className == "favorite") {
                    favorite.className = ""
                    favorites.forEach((el, index) => {
                        if (elem.name == el.name)
                            favorites.splice(index, 1)
                    })
                    sessionStorage.setItem("favorite", JSON.stringify(favorites))
                } else {
                    favorite.className = "favorite"
                    favorites.push(elem)
                    sessionStorage.setItem("favorite", JSON.stringify(favorites))
                }
            })
        })
}
fetch(api)
    .then(arg => arg.json())
    .then(json => {
        pokemons.forEach((elem, index) => {
            createBlock(elem, elem.idd)
            createPag(index, elem.idd)
        })
        json.results.forEach((el, index) => {
            let i = 0
            pokemons.forEach((elem) => {
                if (el.name == elem.name) {
                    i++
                }
            })
            if (i > 0) return
            let button = document.createElement("button")
            list.appendChild(button)
            button.innerHTML = el.name
            button.className = `name`
            button.addEventListener("click", () => {
                document.querySelectorAll(".block").forEach(el => el.style.visibility = "hidden")
                button.remove()
                el.idd = index
                pokemons.push(el)
                sessionStorage.setItem("pokemons", JSON.stringify(pokemons))
                createBlock(el, el.idd)
                createPag(document.querySelectorAll(".block").length, el.idd)
            }, { once: true })
        }
        )
    }
    )