# MongooseCRUDSimOrders

MongooseCRUDSimOrders is a mini e-commerce platform designed to demonstrate comprehensive CRUD operations with Mongoose. This project provides a simulation of adding products to a cart and processing orders, offering admin capabilities for product modifications.

## Features

- Home page displaying all products
- Product creation at `/add-product`
- Admin dashboard for product management at `/dashboard`
- Cart system at `/cart` to add products
- Orders view at `/orders` to simulate purchases with product ID

## Tech Stack

- **Database**: MongoDB
- **ORM**: Mongoose
- **Server**: Express.js
- **Development**: Nodemon
- **Parsing Middleware**: body-parser
- **Template Engine**: EJS

## Installation

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/m-mdy-m/MongooseCRUDSimOrders.git
    ```

2. Navigate to the project directory:

    ```bash
    cd MongooseCRUDSimOrders
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Make sure your MongoDB instance is running. If you have MongoDB set up as a service, it should already be running. Otherwise, you can typically start it with:

    ```bash
    mongod
    ```

5. To start the server, run the following command:

    ```bash
    npm start
    ```

6. Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/) to view the application.

## Configuration

Ensure that MongoDB is running on its default port (27017) and that the Mongoose connection string points to the correct local database:

```json
mongodb://localhost:27017/MongooseCRUDSimOrders
```

## Usage
- The home page `/` will display all the available products.
- Use `/add-product` to add new products.
- Navigate to `/dashboard` to edit or delete existing products.
- Click on the cart button next to each product on the home page to add them to the cart.
- Finally, visit `/orders` to view simulated orders with the associated product IDs.



## Contributing

Feel free to fork the repository, create feature branches, and submit pull requests for any enhancements.



## License

This project is open-source and available under the MIT License.

## Contact

If you have any questions or suggestions, please open an issue in the [repository issue tracker](https://github.com/m-mdy-m/MongooseCRUDSimOrders/issues).