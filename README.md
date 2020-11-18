# JavaScript Capstone Project: FlappyBird

> This project meant to be a platform game, based on the requirements giving to me, and it supposed to be delivered in 5 days as a max, there are a lot of platform games out there starting from the famous game of the nighties Super Mario, I decided to build the FlappyBird game because, to be honest, I was always fascinated by it and in the same time, I was frustrated how it was hard so the first thought that comes to my mind when I heard building a game I thought of building a new and easier version of the FlappyBird.

![game](./game_play.gif)

You can find the requirements of this capstone on this [link](https://www.notion.so/Platform-game-4a55a7d1fcc245bcb012c76814764712).

## Built With

- JavaScript ES6
- Webpack
- SCSS
- Phaser 3
- Babel
- LeaderBoard API Service
- ESlint and Stylelint as linters

## Live Demo

[Live Demo](https://elmejdki.github.io/FlappyBird/)

## How to Play

The game will start at the first page where it asks for your user name you should enter it in order to start the game after you click on the play button you will have a bird on the screen your mission is to fly as far as possible while avoiding the obstacles (Tubes), you can jump with taping on the SPACE button or clicking on the screen.

## Getting Started

### Prerequisites

In order to have this project up and running you will need:

- NodeJS 10+

### Setup

First, you need to clone this project using one of the links above, using this command:

`git clone RESPOSITRY_LINK`

Then you should run: `npm install`

And afterward you supposed to run: `npm run server`, to run the project in your local machine.

Congrats the project is fully working.

### Deployment

For deployment, I used GitHub pages, but as you see my project is full of files and the `index.html` file is inside the `build/` folder, so in order to deploy using GitHub pages we need to put the `index.html` file in the root of the repository, in order to do this we will use a simple trick, please follow the commands below if you want to deploy on your own repository:

- If you have the `build/`  folder declared inside the `.gitignore`  file please remove it from there.

- run `npm run build`  to generate the build folder.

- then make sure that git knows about your subtree, using this command:

  ```
  git add build && git commit -m "Initial build subtree commit"
  ```

- after that use subtree push to send it to gh-pages branch in GitHub:

  ```
  git subtree push --prefix build origin gh-pages
  ```

Now you that have finished, check the link to GitHub pages you will find your project deployed there. you can find the link on the repository settings page.

# NPM available scripts:

Use "npm run-script " followed by any of the following commands :

- "build": "webpack --mode production"
- "watch": "webpack --mode development --watch"
- "test": "jest"

# Future Work

- Add Night Mode to the game,
- Increase difficulty by time or score,
- Improve the mobile version,
- Add more type of birds to play with,
- Add Music that plays on the background;

# Authors

👤 **Zakariae El Mejdki**

- Github: [@elmejdki](https://github.com/elmejdki)
- Twitter: [@zakariae_elmejdki](https://twitter.com/zakariaemejdki)
- Linkedin: [El Mejdki Zakariae](https://www.linkedin.com/in/zakariaeelmejdki/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/elmejdki/FlappyBird/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/)
- [Phaser 3 notes](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/index.html)
- [phaser.io](https://phaser.io)
- [Phaser 3 API docs](https://photonstorm.github.io/phaser3-docs/index.html)

## 📝 License

This project is [MIT](lic.url) licensed.
