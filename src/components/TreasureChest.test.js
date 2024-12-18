import { TreasureChest } from './TreasureChest';
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

describe('TreasureChest', () => {
    it('should create a TreasureChest instance', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const treasureChest = new TreasureChest(scene, position, 50);
        expect(treasureChest).toBeInstanceOf(TreasureChest);
        expect(treasureChest.model.position).toEqual(position);
        expect(treasureChest.reward).toBe(50);
        expect(treasureChest.isOpened).toBe(false);
    });

    it('should have a box geometry', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const treasureChest = new TreasureChest(scene, position, 50);
        expect(treasureChest.model.geometry).toBeInstanceOf(THREE.BoxGeometry);
    });

    it('should have a purple material', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const treasureChest = new TreasureChest(scene, position, 50);
        expect(treasureChest.model.material.color.getHex()).toBe(0x800080);
    });

    it('should set isOpened to true when interacted with', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const player = { addXP: jest.fn(), fish: { position: new THREE.Vector3(1,2,2) }, canInteract: false };
        const treasureChest = new TreasureChest(scene, position, 50);
        treasureChest.onProximity(player);
        treasureChest.onInteract(player);
        expect(treasureChest.isOpened).toBe(true);
    });

    it('should set canInteract to true when player is in proximity', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const player = { fish: { position: new THREE.Vector3(1, 2, 2) }, canInteract: false };
        const treasureChest = new TreasureChest(scene, position, 50);
        treasureChest.onProximity(player);
        expect(player.canInteract).toBe(true);
    });

    it('should set canInteract to false when player is not in proximity', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const player = { fish: { position: new THREE.Vector3(1, 2, 10) }, canInteract: true };
        const treasureChest = new TreasureChest(scene, position, 50);
        treasureChest.onProximity(player);
        expect(player.canInteract).toBe(false);
    });

    it('should add XP to the player and remove the chest on interact', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const player = { addXP: jest.fn(), canInteract: true, fish: { position: new THREE.Vector3(1,2,2) } };
        const treasureChest = new TreasureChest(scene, position, 50);
        treasureChest.onInteract(player);
        expect(player.addXP).toHaveBeenCalledWith(50);
        expect(scene.children.length).toBe(0);
    });

    it('should only open the chest once', () => {
        const position = new THREE.Vector3(1, 2, 3);
        const scene = new THREE.Scene();
        const player = { addXP: jest.fn(), canInteract: true, fish: { position: new THREE.Vector3(1,2,2) } };
        const treasureChest = new TreasureChest(scene, position, 50);
        treasureChest.onInteract(player);
        treasureChest.onInteract(player);
        expect(player.addXP).toHaveBeenCalledTimes(1);
    });
});
