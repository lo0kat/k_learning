# REST API NodeJS/Express/MongoDB
This is a simple NodeJS **REST API** for storing korean words and their translations.
## **Requirements**
You will need **npm**, **MongoDB** and **nodeJS** installed on your machine.
## **Dependencies**
- Express
- Nodemon
- Dotenv
- Mongoose

## **Setup**
First, in the root directory, run : 
```sh
npm install
```
Then create .env file in /config with the following line: 
```sh
DB_CONNECTION=mongodb://localhost:27017/rest
```


Finally, to start the app : 
```sh
npm run start
```

## **TODO**
- Create a docker-compose file
- Add testing with jest
