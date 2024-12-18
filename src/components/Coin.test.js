import { Coin } from './Coin';
import * as THREE from 'three';

describe('Coin', () => {
    it('should create a Coin instance', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const coin = new Coin(position, 10);
        expect(coin).toBeInstanceOf(Coin);
        expect(coin.model.position).toEqual(position);
        expect(coin.value).toBe(10);
    });

    it('should have a sphere geometry', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const coin = new Coin(position, 10);
        expect(coin.model.geometry).toBeInstanceOf(THREE.SphereGeometry);
    });

    it('should have a yellow material', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const coin = new Coin(position, 10);
        expect(coin.model.material.color.getHex()).toBe(0xffff00);
    });
});