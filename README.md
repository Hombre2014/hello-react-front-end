![](https://img.shields.io/badge/Microverse-blueviolet)

# Set up a "Hello world" project with two apps

>  React with ReduxToolkit on the front end.

## Hello-react-front-end part of the project

This project will consist of two separate apps:
- hellp-react-front-end (this one)
- hello-rails-back-end. The back-end repo is [here](https://github.com/Hombre2014/hello-rails-back-end)

## Description

This project is going to have a React front-end with a Rails back-end and connect them to display a random message.

## Project requirements

The project requirements can be viewed [here](https://github.com/microverseinc/curriculum-rails/blob/main/connect-frontend-frameworks/hello_world_two_apps.md)

## Built With

- Languages: JavaScript
- Framework: React, Redux
- Tools: ReduxToolkit

### To start the back end, do the following:

#### Usage

Run the following commands:</br>
`git clone https://github.com/Hombre2014/hello-rails-back-end`</br>
`cd hello-rails-back-end`</br>
`bundle install`</br>
`rails s`</br>
Open a browser and go to: `https://localhost:3000` to view the app.

#### Database setup

`cd hello-rails-back-end`</br>
`rails db:create db:migrate db:seed`

### To start the front end, do the following:

Run the following commands:</br>
`git clone https://github.com/Hombre2014/hello-react-front-end`</br>
`npm install`</br>
`npm start`</br>
The WebDev server will ask you to change the port 3000, since it is already ocupied by the Rails server. Type "Y" and continue. The WebDev server will run on port 3001 and will open a new browser loading the home page.

## Author

👤 **Yuriy Chamkoriyski**

- GitHub: [@Hombre2014](https://github.com/Hombre2014)
- Twitter: [@Chamkoriyski](https://twitter.com/Chamkoriyski)
- LinkedIn: [axebit](https://linkedin.com/in/axebit)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Hombre2014/hello-react-front-end/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./license.md) licensed.
