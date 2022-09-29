import axios from 'axios'


const URL = `http://localhost:9090/api/products/get_all`

export default function getAll() {
    return (
        axios
            .get(URL)
            .then(res => {
                if (res.status === 200) {
                    return { res }
                }
            })
    )
}
