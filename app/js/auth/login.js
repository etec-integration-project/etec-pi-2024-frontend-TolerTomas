const $ = s => document.querySelector(s)
const $form = $('#form')

async function submit(e) {
    e.preventDefault();
    const formData = new FormData($form)
    console.log({
        email: formData.get('email'),
        password: formData.get('password'),
    })
}

$form.addEventlistener('submit', async (e) => {
    
})

    // const res = await fetch('/auth-service/api/users/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         email: formData.email,
    //         password: formData.password,
    //     }),
    //     credentials: 'include'
    // })
    // const data = await res.json()
    // console.log({ data })