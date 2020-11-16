import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    this.add.image(0, 0, 'background').setScale(2).setOrigin(0);

    this.add.image(this.game.renderer.width / 2 - 89, 80, 'title').setScale(2).setOrigin(0);

    const animatedLogo = this.add.sprite(this.game.renderer.width / 2 - 30, 170, 'logobird').setScale(3).setOrigin(0);

    const playButton = this.add.image(this.game.renderer.width / 4, 350, 'play_button').setScale(2).setOrigin(0.5);

    const leaderboardButton = this.add.image((this.game.renderer.width / 4) * 3, 350, 'leaderboard_button').setScale(2).setOrigin(0.5);

    this.anims.create({
      key: 'fly',
      frameRate: 3,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('logobird', {
        frames: [0, 1, 2],
      }),
    });

    animatedLogo.play('fly');

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
      // TODO: work on the this later to show the records of all the users
      // console.log('OPEN The Board');
    });
  }
}