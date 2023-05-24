var AWS = require("aws-sdk");

const doc = new AWS.DynamoDB.DocumentClient();

const items = [
  {product_id: 1, product_name: 'Laptop', product_price: 500.00, product_category: 'Electronics'},
  {product_id: 2, product_name: 'Book', product_price: 10.00, product_category: 'Books'},
  {product_id: 3, product_name: 'Shirt', product_price: 20.00, product_category: 'Clothing'},
  {product_id: 4, product_name: 'Coffee', product_price: 5.00, product_category: 'Beverages'},
  {product_id: 5, product_name: 'Pen', product_price: 1.00, product_category: 'Stationery'},
  {product_id: 6, product_name: 'Watch', product_price: 100.00, product_category: 'Accessories'},
  {product_id: 7, product_name: 'Cake', product_price: 15.00, product_category: 'Bakery'},
  {product_id: 8, product_name: 'Flower', product_price: 2.00, product_category: 'Florist'}
];


for (let item of items) {
 
  let params = {
    TableName: 'kaushik-product',
    Item: item
  };

  
  doc.put(params, function(err, data) {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Success:', data);
    }
  });
}
