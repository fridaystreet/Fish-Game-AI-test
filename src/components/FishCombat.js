import * as THREE from 'three';

export class FishCombat {
    constructor(fishModel, attackPower, audioListener) {
        this.fishModel = fishModel;
        this.attackPower = attackPower;
        this.audioListener = audioListener;
        this.combatSound = new THREE.Audio(audioListener);
        this.audioLoader = new THREE.AudioLoader();
        this.audioLoader.load('assets/coin.mp3', (buffer) => {
            this.combatSound.setBuffer(buffer);
            this.combatSound.setVolume(0.5);
        });
    }

    attack(predator) {
        // Trigger attack animation and apply damage
        this.fishModel.scale.set(1.2, 1.2, 1.2);
        setTimeout(() => {
            this.fishModel.scale.set(1, 1, 1);
        }, 100);
    }

    onProximity(predator, player) {
        const distance = this.fishModel.position.distanceTo(predator.position);
        if (distance < 2) {
            player.canAttack = true;
        } else {
            player.canAttack = false;
        }
    }

    attack(predator, player) {
        if (player.canAttack) {
            // Trigger attack animation and apply damage
            this.fishModel.scale.set(1.2, 1.2, 1.2);
            setTimeout(() => {
                this.fishModel.scale.set(1, 1, 1);
            }, 100);
            predator.takeDamage(this.attackPower);
            this.combatSound.play();
        }
    }
}
