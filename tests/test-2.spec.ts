import { test, expect } from '@playwright/test';

test('Dice', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="text"]').press('Tab');
  await page.locator('input[type="password"]').fill('amir.123');
  await page.getByRole('dialog').getByRole('button', { name: 'Play Now' }).click();
  await page.getByRole('link', { name: 'Provably Fair' }).click();
  await page.goto('https://fortunejack.com/game/orbital.dice');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
  await page.frameLocator('iframe[title="game"]').locator('.rollBtnGuide').click();
});
test('stellar', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="text"]').press('Tab');
  await page.locator('input[type="password"]').fill('amir.123');
  await page.getByRole('dialog').getByRole('button', { name: 'Play Now' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Stellar' }).click();
  await page.frameLocator('iframe[title="game"]').getByText('bet').nth(1).waitFor();
  await page.frameLocator('iframe[title="game"]').getByText('bet', { exact: true }).nth(1).click();
  await page.frameLocator('iframe[title="game"]').getByText('cashout').waitFor();
  await page.frameLocator('iframe[title="game"]').getByText('cashout').click();
});
test('soccer', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="text"]').press('Tab');
  await page.locator('input[type="password"]').fill('amir.123');
  await page.getByRole('dialog').getByRole('button', { name: 'Play Now' }).click();
  //soccer
  await page.getByRole('link', { name: 'Provably Fair' }).click();
  await page.goto('https://fortunejack.com/game/orbital.soccer');
  await page.frameLocator('iframe[title="game"]').locator('.sc-bTTELM').click();
  await page.waitForTimeout(5000);
  //cyberdice
  await page.getByRole('link', { name: 'Provably Fair' }).click();
  await page.goto('https://fortunejack.com/game/orbital.cyberdice');
  await page.frameLocator('iframe[title="game"]').getByText('Roll to win').click();
  await page.waitForTimeout(5000);
  //texas holdem
  await page.getByRole('link', { name: 'Provably Fair' }).click();
  await page.goto('https://fortunejack.com/game/orbital.texas_holdem');
  await page.frameLocator('iframe[title="game"]').getByText('DEAL $0.50RaiseBetREBET $0.50').click();
  //mines
  await page.getByRole('link', { name: 'Provably Fair' }).click();
  await page.goto('https://fortunejack.com/game/orbital.mines');
  await page.frameLocator('iframe[title="game"]').getByText('PlayStop').click();
  await page.frameLocator('iframe[title="game"]').getByText('PlayStop').click();
  await page.waitForTimeout(5000);
  //plinko
  await page.getByRole('link', { name: 'Provably Fair' }).click();
  await page.goto('https://fortunejack.com/game/orbital.plinko');
  await page.frameLocator('iframe[title="game"]').locator('div').filter({ hasText: /^Play$/ }).locator('div').click();
  await page.waitForTimeout(5000);

});