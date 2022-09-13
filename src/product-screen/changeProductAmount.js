import axios from 'axios';

export const changeProductAmount = (id, amount) => {
    axios.put(`https://drink-freeze.herokuapp.com/api/product/changeamount/${id}?amount=${amount}`)
}