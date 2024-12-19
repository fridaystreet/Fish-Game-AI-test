import * as THREE from 'three';

export class XPDisplay {
    constructor(player) {
        this.player = player;
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.top = '10px';
        this.element.style.left = '10px';
        this.element.style.color = 'white';
        this.element.style.fontFamily = 'Arial, sans-serif';
        this.element.style.fontSize = '16px';
        this.element.style.textShadow = '1px 1px 2px black';
        document.body.appendChild(this.element);
        this.update();
    }

    update() {
        this.element.textContent = `Level: ${this.player.level} XP: ${this.player.getXP()} / ${this.player.getXPRequiredForNextLevel()}`;
    }
}