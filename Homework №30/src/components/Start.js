import React, { useState, useEffect } from "react";
function Start() {
    let [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    useEffect(() => {
        sessionStorage.setItem('user', JSON.stringify(user))
    })
    return user.confirm ? <div />
        : (
            < div className="start" >
                <p className="instart2">Todo list</p>
                <p className="instart">Как вас зовут?</p>
                <input onChange={(e) => (setUser({ name: e.target.value, confirm: false }))} className="instart" type="text" placeholder="Введите имя..." />
                <button type="submit" className="instart" onClick={(e) => setUser({ name: user.name, confirm: true })} > Подтвердить</button>
            </div >
        )
}
export default Start