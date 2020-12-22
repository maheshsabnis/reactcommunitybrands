export class Logic {
    constructor(){
        this.products = [
            {ProductId:'Prd001', ProductName:'Laptop', 
            CategoryName: 'Electronics', Manufacturer:'HP',
             Description:'Gaming', BasePrice:10000}
        ];
    }

    getProducts(){
        return this.products;
    }
    saveProduct(prd){
        this.products.push(prd);
        return this.products;
    }
}