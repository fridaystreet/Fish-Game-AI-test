import * as THREE from 'three';

export class Coin {
    constructor(scene, position, type = 'bronze') {
        this.scene = scene;
        this.position = position;
        this.type = type;
        this.value = this.getValue(type);
        this.model = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), this.getMaterial(type));
        this.model.position.copy(position);
        this.scene.add(this.model);
    }

    getValue(type) {
        switch (type) {
            case 'bronze':
                return 5;
            case 'silver':
                return 10;
            case 'gold':
                return 20;
            default:
                return 5;
        }
    }

    getMaterial(type) {
        switch (type) {
            case 'bronze':
                return new THREE.MeshBasicMaterial({ color: 0xcd7f32 }); // Bronze color
            case 'silver':
                return new THREE.MeshBasicMaterial({ color: 0xc0c0c0 }); // Silver color
            case 'gold':
                return new THREE.MeshBasicMaterial({ color: 0xffd700 }); // Gold color
            default:
                return new THREE.MeshBasicMaterial({ color: 0xcd7f32 }); // Default to bronze
        }
    }

    update() {
        // Update coin animation
    }

    onCollision(player) {
        player.consecutiveCoinCount++;
        if (player.consecutiveCoinCount > 1) {
            player.setBonusMultiplier(1 + ((player.consecutiveCoinCount - 1) * 0.1));
        }
        player.addXP(this.value);
        const audioLoader = new THREE.AudioLoader();
        const coinSound = new THREE.Audio(new THREE.AudioListener());
        audioLoader.load('assets/coin.mp3', (buffer) => {
            coinSound.setBuffer(buffer);
            coinSound.setVolume(0.5);
            coinSound.play();
        });
        this.scene.remove(this.model);
        setTimeout(() => {
            player.resetBonusMultiplier();
            player.consecutiveCoinCount = 0;
        }, 1000);
    }
}
