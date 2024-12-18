import * as THREE from 'three';
import { CameraControls } from './components/CameraControls';
import { FishMovement } from './components/FishMovement';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cameraControls = new CameraControls(camera, renderer.domElement);

const geometry = new THREE.ConeGeometry(0.5, 1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const fish = new THREE.Mesh(geometry, material);
scene.add(fish);

import * as THREE from 'three';
import { CameraControls } from './components/CameraControls';
import { FishMovement } from './components/FishMovement';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cameraControls = new CameraControls(camera, renderer.domElement);

const geometry = new THREE.ConeGeometry(0.5, 1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const fish = new THREE.Mesh(geometry, material);
scene.add(fish);

import * as THREE from 'three';
import { CameraControls } from './components/CameraControls';
import { FishMovement } from './components/FishMovement';
import { Coin } from './components/Coin';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cameraControls = new CameraControls(camera, renderer.domElement);

import * as THREE from 'three';
import { CameraControls } from './components/CameraControls';
import { FishMovement } from './components/FishMovement';
import { Coin } from './components/Coin';
import { TreasureChest } from './components/TreasureChest';
import { FishCombat } from './components/FishCombat';
import { ReefEnvironment } from './scenes/ReefEnvironment';
import { Fish } from './components/Fish';
import { Player } from './core/Player';
import { XPDisplay } from './ui/XPDisplay';
import { ShopButton } from './ui/ShopButton';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cameraControls = new CameraControls(camera, renderer.domElement);

const reefEnvironment = new ReefEnvironment(scene);

const geometry = new THREE.ConeGeometry(0.5, 1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const fish = new Fish(geometry, material);
scene.add(fish.model);

const fishMovement = new FishMovement(fish.model, 2);

const coin = new Coin(new THREE.Vector3(2, 0, -5), 10);
scene.add(coin.model);

const treasureChest = new TreasureChest(new THREE.Vector3(-2, 0, -5), 50);
scene.add(treasureChest.model);

const player = new Player();
const xpDisplay = new XPDisplay(player);
const shopButton = new ShopButton(player);

const audioListener = new THREE.AudioListener();
camera.add(audioListener);

const underwaterSound = new THREE.Audio(audioListener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load('assets/underwater.mp3', function(buffer) {
    underwaterSound.setBuffer(buffer);
    underwaterSound.setLoop(true);
    underwaterSound.setVolume(0.5);
    underwaterSound.play();
});

const predator = new FishCombat(fish.model, 1);
const predator = new Predator(scene, 'clownfish');
camera.position.z = 5;

camera.position.z = 5;

const skinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const skin = { name: 'blue', material: skinMaterial };
fish.addSkin(skin);
fish.applySkin(skin);

const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const fish2 = new Fish(geometry2, material2);
scene.add(fish2.model);
fish2.model.position.set(3, 0, 0);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        fishMovement.speedBoost();
    }
});

document.addEventListener('mousedown', (event) => {
    // Basic attack/interact logic
    const chestDistance = fish.model.position.distanceTo(treasureChest.model.position);
    if (chestDistance < 1 && !treasureChest.isOpened) {
        console.log('Treasure chest opened!');
        treasureChest.onInteract();
        scene.remove(treasureChest.model);
    } else {
        const predatorDistance = fish.model.position.distanceTo(predator.position);
        if (predatorDistance < 2) {
            console.log('Attacked predator!');
            fishCombat.attack(predator);
        }
    }
});

function animate() {
    requestAnimationFrame(animate);

    cameraControls.update(fish.model);
    fishMovement.update(0.016);

    predator.update(0.016, fish.model.position);

    // Basic collision detection
    const distance = fish.model.position.distanceTo(coin.model.position);
    if (distance < 0.8) {
        console.log('Coin collected!');
        player.addXP(coin.value);
        xpDisplay.update();
        scene.remove(coin.model);
    }

    renderer.render(scene, camera);
}
let time = 0;
import * as THREE from 'three';
import * as THREE from 'three';
import { CameraControls } from './components/CameraControls';
import { FishMovement } from './components/FishMovement';
import { Coin } from './components/Coin';
import { TreasureChest } from './components/TreasureChest';
import { FishCombat } from './components/FishCombat';
import { ReefEnvironment } from './scenes/ReefEnvironment';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cameraControls = new CameraControls(camera, renderer.domElement);

const reefEnvironment = new ReefEnvironment(scene);

const geometry = new THREE.ConeGeometry(0.5, 1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const fish = new THREE.Mesh(geometry, material);
scene.add(fish);

const fishMovement = new FishMovement(fish, 2);

const coin = new Coin(new THREE.Vector3(2, 0, -5), 10);
scene.add(coin.model);

const treasureChest = new TreasureChest(new THREE.Vector3(-2, 0, -5), 50);
scene.add(treasureChest.model);

const predatorGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
const predatorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const predator = new THREE.Mesh(predatorGeometry, predatorMaterial);
predator.position.set(0, 0, -8);
scene.add(predator);

const fishCombat = new FishCombat(fish, 1);

camera.position.z = 5;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        fishMovement.speedBoost();
    }
});

document.addEventListener('mousedown', (event) => {
    // Basic attack/interact logic
    const chestDistance = fish.position.distanceTo(treasureChest.model.position);
    if (chestDistance < 1 && !treasureChest.isOpened) {
        console.log('Treasure chest opened!');
        treasureChest.onInteract();
        scene.remove(treasureChest.model);
    } else {
        const predatorDistance = fish.position.distanceTo(predator.position);
        if (predatorDistance < 2) {
            console.log('Attacked predator!');
            fishCombat.attack(predator);
        }
    }
});

function animate() {
    requestAnimationFrame(animate);

    time += 0.016;

    fish.rotation.z = Math.sin(time) * 0.2;

    cameraControls.update(fish);
    fishMovement.update(0.016);

    if (fishMovement.speedBoostActive) {
        fish.material.color.set(0x00ffff);
    } else {
        fish.material.color.set(0xffa500);
    }

    // Basic collision detection
    const distance = fish.position.distanceTo(coin.model.position);
    if (distance < 0.8) {
        console.log('Coin collected!');
        scene.remove(coin.model);
    }

    renderer.render(scene, camera);
}

    renderer.render(scene, camera);
}
    }

    renderer.render(scene, camera);
}

animate();