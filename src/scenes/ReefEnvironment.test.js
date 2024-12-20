import { ReefEnvironment } from './ReefEnvironment';
import * as THREE from 'three';

jest.mock('three', () => {
    const originalThree = jest.requireActual('three');
    return {
        ...originalThree,
        AudioLoader: jest.fn().mockImplementation(() => ({
            load: jest.fn().mockImplementation((url, callback) => {
                callback();
            }),
        })),
        Audio: jest.fn().mockImplementation(() => ({
            setBuffer: jest.fn(),
            setLoop: jest.fn(),
            setVolume: jest.fn(),
            play: jest.fn(),
        })),
    };
});

describe('ReefEnvironment', () => {
    it('should create a ReefEnvironment instance', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(reefEnvironment).toBeInstanceOf(ReefEnvironment);
    });

    it('should add a reef to the scene', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(scene.children.length).toBeGreaterThan(0);
    });

    it('should have a box geometry', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(reefEnvironment.scene.children[0].geometry).toBeInstanceOf(THREE.BoxGeometry);
    });

    it('should have a green material', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(reefEnvironment.scene.children[1].material.color.getHex()).toBe(0xff7f50);
    });

    it('should add a directional light to the scene', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(scene.children.find(child => child instanceof THREE.DirectionalLight)).toBeDefined();
    });

    it('should have a white directional light', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        const directionalLight = scene.children.find(child => child instanceof THREE.DirectionalLight);
        expect(directionalLight.color.getHex()).toBe(0xffffff);
    });

    it('should add a water plane to the scene', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(scene.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry)).toBeDefined();
    });

    it('should have a blue transparent material for water', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        const water = scene.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry);
        expect(water.material.color.getHex()).toBe(0x0000ff);
        expect(water.material.transparent).toBe(true);
    });

    it('should add a background to the scene', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(scene.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry && child.position.z === -500)).toBeDefined();
    });

    it('should have a blue background material', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        const background = scene.children.find(child => child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry && child.position.z === -500);
        expect(background.material.color.getHex()).toBe(0x003366);
    });

    it('should add coral formations to the scene', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(reefEnvironment.scene.children.length).toBeGreaterThan(1);
    });

    it('should have a cone geometry for coral', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
         expect(reefEnvironment.scene.children[1].geometry).toBeInstanceOf(THREE.ConeGeometry);
    });

    it('should have a coral material for coral', () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const reefEnvironment = new ReefEnvironment(scene, camera);
        expect(reefEnvironment.scene.children[1].material.color.getHex()).toBe(0xff7f50);
    });
});