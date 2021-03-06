# Doc 
https://www.djamware.com/post/5bb1f05280aca74669894417/node-express-sequelize-and-postgresql-association-example

# Install

`npm install`

create Tweet and response models

`sequelize model:create --name Response --attributes content:string,tweet_id:integer`

`sequelize model:create --name Tweet --attributes message:string`

add association into Tweet.js

```
    static associate(models) {
      // define association here
      Tweet.hasMany(models.Response, {
        foreignKey: 'tweet_id',
        as: 'responses'
      });
    }
```

then create and migrate schema :
`sequelize db:create`
`sequelize db:migrate`

Apply seed :
`npx sequelize-cli db:seed:all`

start application
`nodemon`

# Demo 
request 
`localhost:3000/api/tweet`

response
```
[
  {
    "id": 1,
    "message": "this is  Tweet 1",
    "createdAt": "2022-05-10T04:02:35.000Z",
    "updatedAt": "2022-05-10T04:02:35.000Z",
    "responses": [
      {
        "id": 2,
        "content": "response 2",
        "tweet_id": 1,
        "createdAt": "2022-05-10T04:02:35.000Z",
        "updatedAt": "2022-05-10T04:02:35.000Z"
      },
      {
        "id": 1,
        "content": "response 1",
        "tweet_id": 1,
        "createdAt": "2022-05-10T04:02:35.000Z",
        "updatedAt": "2022-05-10T04:02:35.000Z"
      }
    ]
  },
  {
    "id": 2,
    "message": "this is  Tweet 2",
    "createdAt": "2022-05-10T04:02:35.000Z",
    "updatedAt": "2022-05-10T04:02:35.000Z",
    "responses": [
      {
        "id": 3,
        "content": "response 3",
        "tweet_id": 2,
        "createdAt": "2022-05-10T04:02:35.000Z",
        "updatedAt": "2022-05-10T04:02:35.000Z"
      }
    ]
  },
  {
    "id": 3,
    "message": "this is  Tweet 3",
    "createdAt": "2022-05-10T04:02:35.000Z",
    "updatedAt": "2022-05-10T04:02:35.000Z",
    "responses": []
  }
]
```
