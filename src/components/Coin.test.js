import { Coin } from './Coin';
import * as THREE from 'three';

jest.mock('three', () => {
    const originalThree = jest.requireActual('three');
    return {
        ...originalThree,
        AudioLoader: jest.fn().mockImplementation(() => ({
            load: jest.fn((path, onLoad) => {
                setTimeout(() => {
                    const buffer = new originalThree.AudioBuffer(new originalThree.AudioContext(), 1, 8000, 1);
                    onLoad(buffer);
                }, 0);
            })
        })),
    };
});

describe('Coin', () => {
    it('should create a Coin instance', () => {
        const scene = new THREE.Scene();
        const position = new THREE.Vector3(1, 2, 3);
        const coin = new Coin(scene, position, 'silver');
        expect(coin).toBeInstanceOf(Coin);
        expect(coin.model.position).toEqual(position);
        expect(coin.value).toBe(10);
    });

    it('should have a sphere geometry', () => {
        const scene = new THREE.Scene();
        const coin = new Coin(scene, new THREE.Vector3(0,0,0));
        expect(coin.model.geometry).toBeInstanceOf(THREE.SphereGeometry);
    });

    it('should have a yellow material', () => {
        const scene = new THREE.Scene();
        const coin = new Coin(scene, new THREE.Vector3(0,0,0), 'gold');
        expect(coin.model.material.color.getHex()).toBe(0xffd700);
    });

    it('should add XP to the player and remove the coin on collision', () => {
        const scene = new THREE.Scene();
        const position = new THREE.Vector3(1, 2, 3);
        const coin = new Coin(scene, position, 'silver');
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

    it('should apply a bonus multiplier for consecutive coin collections', () => {
        const scene = new THREE.Scene();
        const position = new THREE.Vector3(1, 2, 3);
        const coin = new Coin(scene, position, 'bronze');
        const player = {
            addXP: jest.fn(),
            consecutiveCoinCount: 1,
            setBonusMultiplier: jest.fn(),
            resetBonusMultiplier: jest.fn(),
        };
        coin.onCollision(player);
        expect(player.setBonusMultiplier).toHaveBeenCalledWith(1.1);
    });
});
