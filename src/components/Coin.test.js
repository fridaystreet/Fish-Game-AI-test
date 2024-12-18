import { Coin } from './Coin';
import * as THREE from 'three';

// Mock THREE.Audio
jest.mock('three', () => {
    const originalTHREE = jest.requireActual('three');
    return {
        ...originalTHREE,
        Audio: jest.fn(() => ({
            setVolume: jest.fn(),
            setBuffer: jest.fn(),
            play: jest.fn(),
        })),
        AudioLoader: jest.fn(() => ({
            load: jest.fn((url, onLoad) => onLoad({})),
        })),
    };
});

describe('Coin', () => {
    it('should create a Coin instance', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const coin = new Coin(scene, position, 10);
        expect(coin).toBeInstanceOf(Coin);
        expect(coin.model.position).toEqual(position);
        expect(coin.value).toBe(10);
    });

    it('should have a sphere geometry', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const coin = new Coin(scene, position, 10);
        expect(coin.model.geometry).toBeInstanceOf(THREE.SphereGeometry);
    });

    it('should have a yellow material', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const coin = new Coin(scene, position, 10);
        expect(coin.model.material.color.getHex()).toBe(0xffff00);
    });

    it('should add XP to the player and remove the coin on collision', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const coin = new Coin(scene, position, 10);
        const player = {
            addXP: jest.fn(),
            consecutiveCoinCount: 0,
            setBonusMultiplier: jest.fn(),
            resetBonusMultiplier: jest.fn(),
        };
        coin.onCollision(player);
        expect(player.addXP).toHaveBeenCalledWith(10);
        expect(scene.children.length).toBe(0);
    });
});
