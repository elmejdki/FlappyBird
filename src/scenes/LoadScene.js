import Phaser from 'phaser';
import background from '../assets/background.png';
import bird from '../assets/birdSprite.png';
import title from '../assets/title.png';
import playButton from '../assets/play_button.png';
import leaderBoardButton from '../assets/leaderboardButton.png';
import bottomTube from '../assets/bottomTube.png';
import topTube from '../assets/topTube.png';
import bronzeMedal from '../assets/bronzeMedal.png';
import gameOver from '../assets/gameOver.png';
import gameOverBoard from '../assets/gameOverBoard.png';
import goldMedal from '../assets/goldMedal.png';
import home from '../assets/home.png';
import hitSound from '../assets/hit_sound.mp3';
import dieSound from '../assets/die_sound.mp3';
import pointSound from '../assets/point_sound.mp3';
import wingSound from '../assets/wing_sound.mp3';

export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadScene' });
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
  }

  preload() {
    this.load.image('background', background);

    this.load.spritesheet('logobird', bird, {
      frameWidth: 20,
      frameHeight: 14,
      startFrame: 0,
      endFrame: 2,
    });

    this.load.spritesheet('bird', bird, {
      frameWidth: 20,
      frameHeight: 14,
      startFrame: 0,
      endFrame: 2,
    });

    this.load.image('title', title);

    this.load.image('play_button', playButton);

    this.load.image('leaderboard_button', leaderBoardButton);

    this.load.image('bottom_tube', bottomTube);

    this.load.image('home', home);

    this.load.image('top_tube', topTube);

    this.load.image('bronze_medal', bronzeMedal);

    this.load.image('game_over', gameOver);

    this.load.image('game_over_board', gameOverBoard);

    this.load.image('gold_medal', goldMedal);

    // getting all the audios
    this.load.audio('hit_sound', hitSound);

    this.load.audio('die_sound', dieSound);

    this.load.audio('point_sound', pointSound);

    this.load.audio('wing_sound', wingSound);

    // Add a loading bar to show assets uploading progress
    const loadingBarContainer = this.add.graphics({
      fillStyle: {
        color: 0x595959,
      },
    });

    loadingBarContainer.fillRect(
      this.game.renderer.width / 2 - 105,
      this.game.renderer.height / 2 - 5,
      210,
      30,
    );

    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0x919191,
      },
    });

    this.add.text(
      this.game.renderer.width / 2, this.game.renderer.height / 2 - 30, 'Loading...',
      {
        font: '26px Arial', fill: '#ffffff',
      },
    ).setOrigin(0.5);

    const percentText = this.add.text(
      this.game.renderer.width / 2, this.game.renderer.height / 2 + 10, '0%',
      {
        font: '18px Arial', fill: '#ffffff',
      },
    ).setOrigin(0.5);

    this.load.on('progress', (percent) => {
      const percentFloor = Math.round(percent * 100);

      loadingBar.fillRect(
        this.game.renderer.width / 2 - 100,
        this.game.renderer.height / 2,
        200 * percent,
        20,
      );

      percentText.setText(`${percentFloor}%`);
    });
  }

  create() {
    this.scene.start('MenuScene');
  }
}