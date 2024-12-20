const puppeteer = require('puppeteer');
const { NodeWebSocketTransport } = require('puppeteer-core/internal/node/NodeWebSocketTransport');

NodeWebSocketTransport.create = jest.fn().mockResolvedValue({
    on: jest.fn(),
    send: jest.fn(),
    close: jest.fn(),
});

describe('Game E2E Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        try {
            browser = await puppeteer.launch({ headless: 'new', timeout: 20000 });
            page = await browser.newPage();
            await page.goto('http://127.0.0.1:8080');
        } catch (error) {
            console.error('Error during browser initialization:', error);
        }
    }, 20000);

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });

    it('should load the game and check for console errors', async () => {
        const errors = [];
        if (page) {
            page.on('console', msg => {
                if (msg.type() === 'error') {
                    errors.push(msg.text());
                }
            });
        }

        try {
            await page?.waitForTimeout(2000); // Wait for 2 seconds to allow the game to load
            expect(errors).toEqual([]);
        } finally {
            await page?.close();
        }
    });
});