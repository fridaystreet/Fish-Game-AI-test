import * as THREE from 'three';

export class ShopScreen {
    constructor(player) {
        this.player = player;
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.top = '0';
        this.element.style.left = '0';
        this.element.style.width = '100%';
        this.element.style.height = '100%';
        this.element.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.element.style.display = 'none';
        this.element.style.flexDirection = 'column';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        document.body.appendChild(this.element);

        this.title = document.createElement('h1');
        this.title.textContent = 'Shop';
        this.title.style.color = 'white';
        this.title.style.fontFamily = '"Bangers", cursive';
        this.element.appendChild(this.title);

        this.itemsContainer = document.createElement('div');
        this.itemsContainer.style.display = 'flex';
        this.itemsContainer.style.flexWrap = 'wrap';
        this.itemsContainer.style.justifyContent = 'center';
        this.itemsContainer.style.border = '1px solid white';
        this.itemsContainer.style.padding = '10px';
        this.element.appendChild(this.itemsContainer);

        this.backButton = document.createElement('button');
        this.backButton.textContent = 'Back';
        this.backButton.style.backgroundColor = 'gray';
        this.backButton.style.color = 'white';
        this.backButton.style.border = 'none';
        this.backButton.style.padding = '10px 20px';
        this.backButton.style.cursor = 'pointer';
        this.backButton.style.fontFamily = 'Arial, sans-serif';
        this.backButton.style.fontSize = '16px';
        this.backButton.addEventListener('click', () => this.close());
        this.element.appendChild(this.backButton);
    }

    addItem(item) {
        const itemElement = document.createElement('div');
        itemElement.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        itemElement.style.padding = '20px';
        itemElement.style.margin = '10px';
        itemElement.style.width = '200px';
        itemElement.style.textAlign = 'center';
        itemElement.style.color = 'white';
        itemElement.style.fontFamily = 'Arial, sans-serif';
        itemElement.style.fontSize = '16px';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.style.fontFamily = '"Bangers", cursive';
        itemElement.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemElement.appendChild(itemDescription);

        const itemCost = document.createElement('p');
        itemCost.textContent = `Cost: ${item.cost} XP`;
        itemElement.appendChild(itemCost);

        const purchaseButton = document.createElement('button');
        purchaseButton.textContent = 'Purchase';
        purchaseButton.style.backgroundColor = 'green';
        purchaseButton.style.color = 'white';
        purchaseButton.style.border = 'none';
        purchaseButton.style.padding = '10px 20px';
        purchaseButton.style.cursor = 'pointer';
        purchaseButton.style.fontFamily = 'Arial, sans-serif';
        purchaseButton.style.fontSize = '16px';
        purchaseButton.addEventListener('click', () => this.purchaseItem(item));
        itemElement.appendChild(purchaseButton);

        this.itemsContainer.appendChild(itemElement);
    }

    purchaseItem(item) {
        console.log(`Purchasing item: ${item.name}`);
        this.showConfirmationDialog(item);
    }

    addShopItem(item) {
        this.addItem(item);
    }

    showConfirmationDialog(item) {
        const dialog = document.createElement('div');
        dialog.style.position = 'absolute';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        dialog.style.padding = '20px';
        dialog.style.color = 'white';
        dialog.style.fontFamily = 'Arial, sans-serif';
        dialog.style.fontSize = '16px';
        dialog.style.textAlign = 'center';
        dialog.style.zIndex = '1000';

        const message = document.createElement('p');
        message.textContent = `Purchase ${item.name} for ${item.cost} XP?`;
        dialog.appendChild(message);

        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Confirm';
        confirmButton.style.backgroundColor = 'green';
        confirmButton.style.color = 'white';
        confirmButton.style.border = 'none';
        confirmButton.style.padding = '10px 20px';
        confirmButton.style.cursor = 'pointer';
        confirmButton.style.fontFamily = 'Arial, sans-serif';
        confirmButton.style.fontSize = '16px';
        confirmButton.addEventListener('click', () => {
            if (this.player.getXP() >= item.cost) {
                this.player.addXP(-item.cost);
                if (item.type === 'upgrade') {
                    this.player.applyUpgrade(item.upgrade);
                } else if (item.type === 'skin') {
                    this.player.applySkin(item.skin);
                } else if (item.type === 'fish') {
                    this.player.unlockFishSpecies(item.species);
                }
                this.close();
                document.body.removeChild(dialog);
            } else {
                message.textContent = `Not enough XP to purchase ${item.name}`;
            }
        });
        dialog.appendChild(confirmButton);

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.backgroundColor = 'red';
        cancelButton.style.color = 'white';
        cancelButton.style.border = 'none';
        cancelButton.style.padding = '10px 20px';
        cancelButton.style.cursor = 'pointer';
        cancelButton.style.fontFamily = 'Arial, sans-serif';
        cancelButton.style.fontSize = '16px';
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(dialog);
        });
        dialog.appendChild(cancelButton);

        document.body.appendChild(dialog);
    }

    open() {
        this.element.style.display = 'flex';
    }

    close() {
        this.element.style.display = 'none';
    }
}