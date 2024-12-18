import * as THREE from 'three';

export class ReefEnvironment {
    constructor(scene) {
        this.scene = scene;
        this.createReef();
    }

    createReef() {
        const geometry = new THREE.BoxGeometry(10, 1, 10);
        const material = new THREE.MeshBasicMaterial({ color: 0x008000 });
        const reef = new THREE.Mesh(geometry, material);
        this.scene.add(reef);

        const coralGeometry = new THREE.ConeGeometry(1, 2, 32);
        const coralMaterial = new THREE.MeshBasicMaterial({ color: 0xff7f50 });
        const coral1 = new THREE.Mesh(coralGeometry, coralMaterial);
        coral1.position.set(3, 1, -3);
        this.scene.add(coral1);

        const coral2 = new THREE.Mesh(coralGeometry, coralMaterial);
        coral2.position.set(-3, 1, 3);
        this.scene.add(coral2);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);

        const waterGeometry = new THREE.PlaneGeometry(100, 100);
        const waterMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.3 });
        const water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -Math.PI / 2;
        water.position.y = 0.5;
        this.scene.add(water);

        const background = new THREE.Mesh(
            new THREE.PlaneGeometry(1000, 1000),
            new THREE.MeshBasicMaterial({ color: 0x003366 })
        );
        background.position.z = -500;
        this.scene.add(background);
    }
}