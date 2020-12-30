const selectrow=(product)=>{
    alert(`Selected data ${JSON.stringify(product)}`);
    return {
        type: "SELECT_ROW",
        product
    }
}

export default selectrow;