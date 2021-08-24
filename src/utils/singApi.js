class SingApi {
    constructor(baseUrl, token) {
        this._baseUrl = baseUrl;
        this._token = token;

        this._headers = {
            'Content-Type': 'application/json',
        }
    }

    signUp(mail, password) {
        return fetch(`${this._baseUrl}/signup`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    password: password,
                    email: mail
                })
            })
            .then((res) => {
                return res.json();
            })
    }

    signIn(mail, password) {
        return fetch(`${this._baseUrl}/signin`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    password: password,
                    email: mail
                })
            })
            .then((res) => {
                return res.json();
            })
    }

    check(jwt) {
        return fetch(`${this._baseUrl}/signin`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                return res.json();
            })
    }

}

const singApi = new SingApi('https://auth.nomoreparties.co', 'da22e24c-dd01-4958-b7cb-8f4974dde69d');
export default singApi;