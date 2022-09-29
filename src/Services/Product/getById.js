import axios from 'axios'


const URL = `http://localhost:9090/api/products/getbyid`

export default function getById(id) {

    return (
        axios
            .get(`${URL}/${id}`)
            .then(res => {
                return(res.data);
            })
    )
}
