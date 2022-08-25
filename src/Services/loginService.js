import axios from 'axios'


const URL = `http://localhost:9090/api/user/login`

export default function loginService({ email, password }) {
    return (
        axios
            .post(URL, {
                email: email,
                password: password
            })
            .then(res => {
                if (res.status === 200) {
                    const { token, name } = res.data
                    return { token, name }
                }
            })
    )
}
