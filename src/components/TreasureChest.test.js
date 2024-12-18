import { TreasureChest } from './TreasureChest';
import * as THREE from 'three';

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
        const player = { addXP: jest.fn() };
        const treasureChest = new TreasureChest(scene, position, 50);
        treasureChest.onInteract(player);
        expect(treasureChest.isOpened).toBe(true);
    });
});