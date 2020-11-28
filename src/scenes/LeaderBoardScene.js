import Phaser from 'phaser';
import { getScores } from '../utilities/api';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderBoardScene' });
  }

  create() {
    this.add.image(0, 0, 'background').setScale(2).setOrigin(0);

    this.add.image(144, 50, 'title').setScale(2);

    this.add.text(144, 100, 'LeaderBoard', {
      font: '25px Sans-serif',
      fill: '#ffffff',
    }).setOrigin(0.5);

    const loadingText = this.add.text(144, 260, 'Loading...', {
      font: '18px Sans-serif',
      fill: '#ffffff',
    }).setOrigin(0.5);

    getScores().then((scores) => {
      loadingText.setVisible(false);

      scores = scores.filter(
        record => (record.score <= 201 && record.user.length <= 15),
      ).sort((a, b) => b.score - a.score);

      for (let i = 0; i < scores.length && i < 10; i += 1) {
        this.add.text(80, 150 + i * 30, `${i + 1}.`, {
          font: '18px Sans-serif',
          fill: '#ffffff',
          shadow: {
            offsetX: 0,
            offsetY: 0,
            color: '#000',
            blur: 3,
            stroke: false,
            fill: true,
          },
        }).setOrigin(1, 0.5);

        this.add.text(85, 150 + i * 30, `${scores[i].user}`, {
          font: '18px Sans-serif',
          fill: '#ffffff',
          shadow: {
            offsetX: 0,
            offsetY: 0,
            color: '#000',
            blur: 3,
            stroke: false,
            fill: true,
          },
        }).setOrigin(0, 0.5);

        this.add.text(230, 150 + i * 30, `${scores[i].score}`, {
          font: '18px Sans-serif',
          fill: '#ffffff',
          shadow: {
            offsetX: 0,
            offsetY: 0,
            color: '#000',
            blur: 3,
            stroke: false,
            fill: true,
          },
        }).setOrigin(1, 0.5);
      }
    });

    const homeButton = this.add.image(242, 470, 'home').setScale(0.6);

    homeButton.setInteractive();

    homeButton.on('pointerover', () => {
      homeButton.setScale(0.7);
    });

    homeButton.on('pointerout', () => {
      homeButton.setScale(0.6);
    });

    homeButton.on('pointerup', () => {
      this.scene.start('MenuScene');
    });
  }
}