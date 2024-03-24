

export async function post(user, password) {

    const url = 'https://d031-2804-14d-be88-93f9-5966-2a6f-650c-74c7.ngrok-free.app/login'

    const json = {
        user,
        password
    }

    const headerOptions = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    }

    const response = await fetch(url, headerOptions)
    console.log(response);
}