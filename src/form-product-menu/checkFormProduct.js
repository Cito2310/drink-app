export const checkFormProduct = (payload) => {
    const brandsAvailable = [
        "ades", "almamora", "aquarius", "baggio", "balbo", "benedictino", "cabalgata", 
        "cepita", "cocacola", "delvalle", "estanciamendoza", "fanta", "frizze", "imperial", 
        "powerade", "quilmes", "real", "secco", "sierra", "sprite", "toro"]

    const arrName = Object.keys(payload);
    const emptyFields = arrName.map(arr => {if (payload[arr].trim() === "") {return true}})


    if (emptyFields.includes(true)) {return {error: true, msg: "Faltan rellenar campos"}

    } else if (!brandsAvailable.includes(payload.brand.toLowerCase())) {return {error: true, msg: "Marca no valida"}

    } else {return {error: false}}
}