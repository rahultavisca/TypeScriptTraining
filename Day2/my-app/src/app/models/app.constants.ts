
import { Customer, Order } from './app.models';

export const Products = [
    {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT', IsDeleted: false},
    {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL', IsDeleted: false},
    {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD', IsDeleted: false}
  ];
  
  export const Categories =[
    'ECT', 'ECL', 'FOD'
  ];

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(101, "Customer1", "Pune", "test@test.com", "1234567890"));
Customers.push(new Customer(102, "Customer2", "Mumbai", "test@test.com", "1234567890"));
Customers.push(new Customer(103, "Customer3", "Delhi", "test@test.com", "1234567890"));

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(201, "Test Order1", "15/5/2020", 101, 2, 200));
Orders.push(new Order(202, "Test Order1", "15/5/2020", 101, 2, 200));
Orders.push(new Order(203, "Test Order1", "15/5/2020", 102, 2, 200));
Orders.push(new Order(204, "Test Order1", "15/5/2020", 103, 2, 200));
Orders.push(new Order(205, "Test Order1", "15/5/2020", 103, 2, 200));
Orders.push(new Order(206, "Test Order1", "15/5/2020", 103, 2, 200));