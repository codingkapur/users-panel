# Users Data Visualization Panel

Note: This project was initially limited to creating a front end as proof of skill in a technical round for a job opportunity. However, I decided to continue working on it and add functionality to it post submission.
But now, I want to build a small application inspired from this, which is basically a Data Visualization Application for small businesses where the owner can view all orders with respective essential information and perform CRUD operations. 

Link to project: https://github.com/codingkapur/visualize-my-orders.git

## Features

1. Fetch users from the database and display them in the users panel along with associated information.
2. Perform persisting CRUD operations.
3. Search by Name.
4. Sort the users by Name, Status, Source and Date.

## How to install
### Prequisite: Node 14
1. Clone repository using this url : https://github.com/codingkapur/users-panel.git
2. Go to project root directory and run the following commands:
    a. npm install
    b. npm run server
    c. npm start


Data has been generated by file named Populate.js

Features to be implemented:
1. Responsiveness
2. On hover features
3. Heading Row - DONE
5. Select all on click on checkbox in Heading row
6. Search and update pagination - Done
7. Pagination with arrow key instead of all page numbers - Done


## On The Search Feature

Initially the search was conducted on the userlist generated by retrieving data from the database but that is not a good real time use case as any changes made to this data will not be persisting change unless the whole database is overwritten with this new data, which becomes proportionally preposterous with the increasing size of the data set.

Therefore, search is to be conducted on the database and results found, if any, have to be rendered accordingly, with updated pagination. Any changes made on data searched for has to be updated in the database. 
