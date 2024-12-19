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
import { Predator } from './components/Predator';

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

const fishMovement = new FishMovement(fish.model, 2, null, fish.model, camera.audioListener);

const coin1 = new Coin(scene, new THREE.Vector3(2, 0, -5), 'bronze');
const coin2 = new Coin(scene, new THREE.Vector3(4, 0, -10), 'silver');
const coin3 = new Coin(scene, new THREE.Vector3(6, 0, -15), 'gold');

const treasureChest1 = new TreasureChest(scene, new THREE.Vector3(-2, 0, -5), 'small');
const treasureChest2 = new TreasureChest(scene, new THREE.Vector3(-4, 0, -10), 'medium');
const treasureChest3 = new TreasureChest(scene, new THREE.Vector3(-6, 0, -15), 'large');

scene.add(treasureChest1.model);
scene.add(treasureChest2.model);
scene.add(treasureChest3.model);

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

const coinSound = new THREE.Audio(audioListener);
audioLoader.load('assets/coin.mp3', function(buffer) {
    coinSound.setBuffer(buffer);
    coinSound.setVolume(0.5);
});

const treasureChestSound = new THREE.Audio(audioListener);
audioLoader.load('assets/coin.mp3', function(buffer) { // Using coin.mp3 as a placeholder
    treasureChestSound.setBuffer(buffer);
    treasureChestSound.setVolume(0.5);
});

const predator = new FishCombat(fish.model, 1, audioListener);
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
    scene.children.forEach(child => {
        if (child.type === 'Mesh' && child.geometry.type === 'BoxGeometry' && child.userData.treasureChest) {
            const distance = fish.model.position.distanceTo(child.position);
            const treasureChest = child.userData.treasureChest;
            if (distance < 1 && !treasureChest.isOpened) {
                console.log('Treasure chest opened!');
                treasureChest.onInteract(player);
                scene.remove(child);
                treasureChestSound.play(); // Play the treasure chest sound
            }
        }
    });
    const predatorDistance = fish.model.position.distanceTo(predator.position);
    if (predatorDistance < 2) {
        console.log('Attacked predator!');
        fishCombat.attack(predator);
    }
});

function animate() {
    requestAnimationFrame(animate);

    cameraControls.update(fish.model);
    fishMovement.update(0.016);

    predator.update(0.016, fish.model.position);

    // Basic collision detection
    scene.children.forEach(child => {
        if (child.type === 'Mesh' && child.geometry.type === 'SphereGeometry') {
            const distance = fish.model.position.distanceTo(child.position);
            if (distance < 0.8) {
                console.log('Coin collected!');
                const coin = child.userData.coin;
                if (coin) {
                    player.addXP(coin.value);
                    xpDisplay.update();
                    scene.remove(child);
                    coinSound.play(); // Play the coin collection sound
                }
            }
        }
    });

    if (player.getXP() >= player.getXPRequiredForNextLevel()) {
        player.levelUp();
        xpDisplay.update();
    }

    renderer.render(scene, camera);
}
let time = 0;

animate();