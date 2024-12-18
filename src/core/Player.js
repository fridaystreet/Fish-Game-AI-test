export class Player {
    constructor(initialXP = 0) {
        this.xp = initialXP;
        this.bonusMultiplier = 1;
        this.consecutiveCoinCount = 0;
        this.level = 0;
    }

    addXP(amount) {
        this.xp += this.applyBonusMultiplier(amount);
    }

    getXP() {
        return this.xp;
    }

    setXP(amount) {
        this.xp = amount;
    }

    applyBonusMultiplier(amount) {
        return amount * this.bonusMultiplier;
    }

    setBonusMultiplier(multiplier) {
        this.bonusMultiplier = multiplier;
    }

    resetBonusMultiplier() {
        this.bonusMultiplier = 1;
    }

    getXPRequiredForNextLevel() {
        return 100 * (this.level + 1);
    }

    levelUp() {
        this.level++;
        this.xp = 0;
    }

    applyUpgrade(upgrade) {
        switch (upgrade.type) {
            case 'speed':
                this.speed += upgrade.amount;
                break;
            case 'attack':
                this.attack += upgrade.amount;
                break;
            case 'health':
                this.health += upgrade.amount;
                break;
            case 'turning':
                this.turning += upgrade.amount;
                break;
        }
    }

    applySkin(skin) {
        this.skin = skin;
    }

    unlockFishSpecies(species) {
        this.fishSpecies = species;
    }
}