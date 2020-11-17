import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  init(data) {
    this.currentScore = data.currentScore;
    this.previousScene = data.prev;

    this.bestScore = Number(localStorage.getItem('bestScore'));

    if (!this.bestScore || this.bestScore < this.currentScore) {
      this.bestScore = this.currentScore;
      localStorage.setItem('bestScore', this.currentScore);
    }
  }

  create() {
    this.add.image(144, 100, 'game_over').setScale(2).setOrigin(0.5);

    this.add.image(144, 180, 'game_over_board').setScale(2).setOrigin(0.5, 0);

    this.add.text(
      235,
      212,
      `${this.currentScore}`,
      {
        font: '20px Sans-serif',
        fill: '#ffffff',
      },
    ).setDepth(2).setOrigin(1, 0);

    this.add.text(
      235,
      255,
      `${this.bestScore}`,
      {
        font: '20px Sans-serif',
        fill: '#ffffff',
      },
    ).setDepth(2).setOrigin(1, 0);

    if (this.currentScore >= 100) {
      this.add.image(80, 246, 'gold_medal').setScale(2);
    } else if (this.currentScore >= 50) {
      this.add.image(80, 246, 'bronze_medal').setScale(2);
    }

    const playButton = this.add.image(this.game.renderer.width / 4, 380, 'play_button').setScale(2).setOrigin(0.5);

    const leaderboardButton = this.add.image((this.game.renderer.width / 4) * 3, 380, 'leaderboard_button').setScale(2).setOrigin(0.5);

    playButton.setInteractive();
    leaderboardButton.setInteractive();

    playButton.on('pointerover', () => {
      playButton.setScale(2.1);
    });

    leaderboardButton.on('pointerover', () => {
      leaderboardButton.setScale(2.1);
    });

    playButton.on('pointerout', () => {
      playButton.setScale(2);
    });

    leaderboardButton.on('pointerout', () => {
      leaderboardButton.setScale(2);
    });

    playButton.on('pointerup', () => {
      this.scene.start('MainScene');
    });

    leaderboardButton.on('pointerup', () => {
      this.scene.start('LeaderBoardScene');
    });
  }
}