import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> {
      if(this.products.find(p => p.ProductId == prd.ProductId)) {
        this.products.splice(this.products.findIndex(p => p.ProductId == prd.ProductId), 1);
      }
      this.products.push(prd);
      return this.products;
    }

    deleteProduct(productId: number): Array<Product> {
      if (this.products.find(p => p.ProductId == productId)) {
        this.products.splice(this.products.findIndex(p => p.ProductId == productId), 1);
      }
      return this.products;
    }

    sortByName(): Array<Product> {
      return this.products.sort(function(p1, p2){
        if(p1.ProductName < p2.ProductName) { return -1; }
        if(p1.ProductName > p2.ProductName) { return 1; }
        return 0;
      })
    }

    reverseByName(): Array<Product> {
      return this.products.reverse();
    }

    searchProducts(searchTerm: string): Array<Product> {
      return this.products.filter(p => p.ProductName.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase()) || 
            p.Category.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase()))
    }
}