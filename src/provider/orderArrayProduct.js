export const orderArrayProduct = (arrProducts = [], order) => {
    const compare = ( a, b ) => {
        if (order === "name") {
            if ( a.name < b.name ){ return -1 }
            if ( a.name > b.name ){ return 1 }

            return 0;

        } else if (order === "brand") {
            if ( a[order].name < b[order].name ){ return -1 }
            if ( a[order].name > b[order].name ){ return 1 }

            if ( a.name < b.name ){ return -1 }
            if ( a.name > b.name ){ return 1 }

            return 0;
        } else {
            if ( a[order].name < b[order].name ){ return -1 }
            if ( a[order].name > b[order].name ){ return 1 }
            
            if ( a.brand.name < b.brand.name ){ return -1 }
            if ( a.brand.name > b.brand.name ){ return 1 }

            if ( a.name < b.name ){ return -1 }
            if ( a.name > b.name ){ return 1 }

            return 0;
        }
    }
    return arrProducts.sort(compare)
}