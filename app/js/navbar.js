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

    $header.innerHTML = `<nav>
            <ul>
                <button id="logout-button" >Cerrar sesión</button>
            </ul>
        </nav>`

        const $logoutbtn = $('#logout-button')

        $logoutbtn.addEventListener('click', async (e) => {
            e.preventDefault()
            fetch('/api/users/logout', {
                method: 'POST',
                credentials: 'include'
            })
                .then(() => {
                    localStorage.removeItem('user')
                    localStorage.removeItem('path')
                    location.href = '/'
                })
        })
    
    return
}

navbar()

