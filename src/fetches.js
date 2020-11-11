import request from "superagent";


export async function fetchHotSauces() {
    try {
        const response = await request.get('https://obscure-hamlet-18944.herokuapp.com/hot-sauce')

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchOneHotSauce(someId) {
    try {
        const response = await request.get(`https://obscure-hamlet-18944.herokuapp.com/hot-sauce/${someId}`)

        return response.body;
    } catch(err) {
        throw err
    }
}
export async function fetchType(someId) {
    try {
        const response = await request.get('https://obscure-hamlet-18944.herokuapp.com/types')

        return response.body;
    } catch(err) {
        throw err
    }
}

export async function creatHotSauce(newSauce) {
    try {
        await request
        .post(`https://obscure-hamlet-18944.herokuapp.com/hot-sauce`)
        .send(newSauce);

        return;
    } catch(err){
        throw err
    }
}

export async function updateHotSauce(someId, newSauce) {
    try {
        await request
        .put(`https://obscure-hamlet-18944.herokuapp.com/hot-sauce/${someId}`)
        .send(newSauce);

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteHotSauce(someId) {
    try {
        await request.delete(`https://obscure-hamlet-18944.herokuapp.com/hot-sauce/${someId}`);
    
    return;
    } catch(err) {
        throw err;
    }

}