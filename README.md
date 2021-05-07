# appinessProject
This project code have solution of task-2 :  Delete associated products in products table when admin deletes one category. 

Steps to Run the Code:

1. clone repository neetesh1996/appinessProject in your pc
2. Install dependencies : npm i
3. Start server : npm start

For verifying project in postman 
1. First Add category : 
API: URL:http://127.0.0.1:3000/api/addcategory 
    method: post
    body: {
    "categoryName": "Category",  // sample data
    "categoryDescription": "category Description" // sample data
}

2. Get All Categories:
API: URL:http://127.0.0.1:3000/api/getAllCategories 
    method: get
    response: sample response
{
    "result": [
        {
            "categoryId": 6,
            "categoryName": "Category",
            "categoryDescription": "category Description"
        }
    ],
    "TotalRecords": 1
}

3. Add Product
API: URL:http://127.0.0.1:3000/api/addProduct
     method: post
     body:{
    "productName": "Product", // sample data
      "productDescription": "product Description", // sample data
      "productPrice": "234", // sample data
      "categoryId": 4 // sample data
}

4.Get all products
API: URL: http://127.0.0.1:3000/api/getAllProducts
     method: get
     sample Response:
     {
    "result": [
        {
            "productId": 2,
            "productName": "Product",
            "productDescription": "product Description",
            "productPrice": "234",
            "categoryId": 3
        },
        {
            "productId": 7,
            "productName": "Product",
            "productDescription": "product Description",
            "productPrice": "234",
            "categoryId": 3
        }
    ],
    "TotalRecords": 2
}

5. Delete category By CategoryId 
API: URL: http://127.0.0.1:3000/api/deleteCategory
     method: delete
     params: categoryId
Sample response:
{
    "status": true,
    "msg": "Category & associated products Deleted successfully categoryId: 6"
}

Note: In this project used AWS RDS myqsl database
