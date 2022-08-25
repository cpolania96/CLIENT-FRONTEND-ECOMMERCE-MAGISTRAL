import axios from 'axios'


const URL = `http://localhost:9090/api/user/register`

export default function registerService({ name, email, password }) {
    return (
        axios
            .post(URL, {
                name: name,
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
