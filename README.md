# E-Commerce API using MongoDB and Express

This project is an API for an e-commerce platform built using MongoDB and Express.js. The API supports CRUD operations (Create, Read, Update, Delete) on a MongoDB database.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/atharva-narkhede/MongoDBcrud.git
cd MongoDBcrud
```

### Install Dependencies

```bash
npm install
```

### Setup MongoDB

Ensure you have MongoDB installed and running. You can check your MongoDB connection using MongoDB Compass or the Mongo shell.

### Configuration

Create a `url.js` file in the root directory and add your MongoDB connection URL:

```javascript
module.exports = `mongodb://localhost:27017`
```

You can also add your MongoDB Atlas cloud URL:

```javascript
module.exports = `your-mongodb-atlas-url`
```

### Run the Server

```bash
node server.js
```

The server will run on port `8080` or the port specified in your environment variables.

## API Endpoints

### Insert Data

#### POST /insert

**Request:**

```json
{
    "p_id": "1",
    "p_name": "Product 1",
    "p_cost": 100
}
```

**Postman Example:**

1. Set the request type to `POST`.
2. URL: `http://localhost:8080/insert`
3. Body: Select `raw` and `JSON` format, then add the request JSON.

**Response:**

```json
{
    "insert": "success"
}
```

### Fetch Data

#### GET /fetch

**Request:**

No body required.

**Postman Example:**

1. Set the request type to `GET`.
2. URL: `http://localhost:8080/fetch`

**Response:**

```json
[
    {
        "p_id": "1",
        "p_name": "Product 1",
        "p_cost": 100
    }
]
```

### Update Data

#### PUT /update

**Request:**

```json
{
    "p_id": "1",
    "p_name": "Updated Product",
    "p_cost": 150
}
```

**Postman Example:**

1. Set the request type to `PUT`.
2. URL: `http://localhost:8080/update`
3. Body: Select `raw` and `JSON` format, then add the request JSON.

**Response:**

```json
{
    "update": "success"
}
```

If an error occurs:

```json
{
    "update": "error" 
}
```

If the record is not found:

```json
{
    "update": "Record not found"
}
```

### Delete Data

#### DELETE /delete

**Request:**

```json
{
    "p_id": "1"
}
```

**Postman Example:**

1. Set the request type to `DELETE`.
2. URL: `http://localhost:8080/delete`
3. Body: Select `raw` and `JSON` format, then add the request JSON.

**Response:**

```json
{
    "delete": "success"
}
```

If an error occurs:

```json
{
    "delete": "Error " 
}
```
If the record is not found:

```json
{
    "delete": "Record not found"
}
```
## Folder Structure

```
MongoDBcrud/
│
├── server.js
├── url.js
├── fetch/
│   └── fetch.js
├── insert/
│   └── insert.js
├── update/
│   └── update.js
└── delete/
    └── delete.js
```

## Checking MongoDB Connection

You can use MongoDB Compass to connect to your MongoDB instance and verify the database and collections are being updated as expected. 

Enjoy building your e-commerce platform with this API!
