import * as THREE from 'three';

export class TreasureChest {
    constructor(scene, position, type = 'medium') {
        this.scene = scene;
        this.position = position;
        this.type = type;
        this.reward = this.getReward(type);
        this.model = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), this.getMaterial(type));
        this.model.position.copy(position);
        this.scene.add(this.model);
        this.isOpened = false;
    }

    getReward(type) {
        switch (type) {
            case 'small':
                return 25;
            case 'medium':
                return 50;
            case 'large':
                return 100;
            default:
                return 50;
        }
    }

    getMaterial(type) {
        switch (type) {
            case 'small':
                return new THREE.MeshBasicMaterial({ color: 0x800080 }); // Purple
            case 'medium':
                return new THREE.MeshBasicMaterial({ color: 0xa52a2a }); // Brown
            case 'large':
                 return new THREE.MeshBasicMaterial({ color: 0xdaa520 }); // Goldenrod
            default:
                return new THREE.MeshBasicMaterial({ color: 0x800080 }); // Default to purple
        }
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
