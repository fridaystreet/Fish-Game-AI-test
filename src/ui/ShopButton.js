import * as THREE from 'three';

export class ShopButton {
    constructor() {
        this.element = document.createElement('button');
        this.element.textContent = 'Shop';
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
        this.element.addEventListener('click', () => this.openShop());
    }

    openShop() {
        console.log('Shop button clicked!');
        // Implement shop screen logic here
    }
}