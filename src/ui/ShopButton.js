import * as THREE from 'three';
import { ShopScreen } from './ShopScreen.js';

export class ShopButton {
    constructor(player) {
        this.player = player;
        this.element = document.createElement('button');
        this.element.innerHTML = '&#128722;'; // Shopping cart icon
        this.element.style.position = 'absolute';
        this.element.style.top = '10px';
        this.element.style.right = '10px';
        this.element.style.backgroundColor = 'orange';
        this.element.style.color = 'white';
        this.element.style.border = 'none';
        this.element.style.padding = '10px 20px';
        this.element.style.cursor = 'pointer';
        this.element.style.fontFamily = 'Arial, sans-serif';
        this.element.style.fontSize = '16px';
        document.body.appendChild(this.element);
        this.shopScreen = new ShopScreen(this.player);
        this.element.addEventListener('click', () => this.openShop());
    }

    openShop() {
        this.shopScreen.open();
    }
}