import * as THREE from 'three';

export class TreasureChest {
    constructor(scene, position, reward) {
        this.scene = scene;
        this.position = position;
        this.reward = reward;
        this.model = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x800080 }));
        this.model.position.copy(position);
        this.scene.add(this.model);
        this.isOpened = false;
    }

    update() {
        // Update chest animation
    }

    onProximity(player) {
        const distance = this.model.position.distanceTo(player.fish.position);
        if (distance < 2) {
            player.canInteract = true;
        } else {
            player.canInteract = false;
        }
    }

    onInteract(player) {
        if (!this.isOpened && player.canInteract) {
            this.isOpened = true;
            player.addXP(this.reward);
            const audioLoader = new THREE.AudioLoader();
            const treasureSound = new THREE.Audio(new THREE.AudioListener());
            audioLoader.load('assets/coin.mp3', (buffer) => {
                treasureSound.setBuffer(buffer);
                treasureSound.setVolume(0.5);
                treasureSound.play();
            });
            this.scene.remove(this.model);
        }
    }
}
