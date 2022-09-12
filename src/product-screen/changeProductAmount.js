import axios from 'axios';

export const changeProductAmount = async(id, amount) => {
    const resp = await axios.put(`https://drink-freeze.herokuapp.com/api/product/changeamount/${id}?amount=${amount}`);
    return resp.data;
}