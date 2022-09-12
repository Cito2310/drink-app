export const orderArrayProduct = (arrProducts = [], order) => {
    const compare = ( a, b ) => {
        if (order === "name") {
            if ( a.name < b.name ){ return -1 }
            if ( a.name > b.name ){ return 1 }

            return 0;

        } else {
            if ( a[order].name < b[order].name ){ return -1 }
            if ( a[order].name > b[order].name ){ return 1 }

            if ( a.name < b.name ){ return -1 }
            if ( a.name > b.name ){ return 1 }

            return 0;
        }
    }
    return arrProducts.sort(compare)
}