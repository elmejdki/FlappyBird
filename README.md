# JavaScript Capstone Project: FlappyBird

> This project meant to be a platform game, based on the requirements giving to me, and it supposed to be delivered on 5 days as max, there are a lot of platform games out there starting from the famous game of the nighties Super Mario, I decided to build the FlappyBird game because to be honest I was always fascinated by it and in the same time I was frustrated how it was hard so the first thought that come to my mind when I heard building a game I thought of build a new and easier version of the FlappyBird.

![game](/home/zack/Desktop/Microverse Projects/JavaScript Projects/FlappyBird/game_play.gif)

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


## Getting Started

### Prerequisites

In order to have this project up and running you will need:

- NodeJS 10+

### Setup

First you need to clone this project using one of the links above, using this command:

`git clone RESPOSITRY_LINK`

Then you should run: `npm install`

And afterwards you supposed to run: `npm run server`, to run the project in your local machine.

Congrats the project is fully working.

### Deployment

For deployment I used GitHub pages, but as you see my project is full of files and the `index.html` file is inside the `build/` folder, so in order to deploy using GitHub pages we need to put the `index.html` file in the root of the repository, in order to do this we will use a simple trick, please follow the commands bellow if you want to deploy on your on repository:

- If you have the `build/ `  folder declared inside the `.gitignore`  file please remove it form there.

- run `npm run build`  to generate the build folder.

- then make sure that git knows about your subtree, using this command:

  ```
  git add build && git commit -m "Initial build subtree commit"
  ```

- after that use subtree push to send it to gh-pages branch in GitHub:

  ```
  git subtree push --prefix build origin gh-pages
  ```

Now you have finish check the link of GitHub pages you will find your project deployed there. you can find the link on the repository settings page.



## Authors

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
