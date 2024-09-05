const $ = s => document.querySelector(s)

const $header = $('#header')

function navbar() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
        $header.innerHTML = `<nav>
            <ul>
                <li> <a href="/index.html">Home</a> </li>
                <li> <a href="/auth/register.html">Registrarse</a> </li>
                <li> <a href="/auth/login.html">Ingresar</a> </li>
            </ul>
        </nav>`
        return
    }
}

navbar()