import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="text"]').press('Tab');
  await page.locator('input[type="password"]').fill('amir.123');
  await page.getByRole('dialog').getByRole('button', { name: 'Play Now' }).click();
  await page.getByRole('link', { name: 'Casino', exact: true }).click();
  await page.getByText('Providers Arrow').click();
  await page.getByText('Bgaming').click();
  await page.getByRole('button', { name: 'Apply' }).isVisible();
  await page.getByRole('button', { name: 'Apply' }).click();
  const response = await page.waitForResponse(response => response.url().includes('/launch') && response.status() === 200);
console.log('RESPONSE ' + (await response.body()));
  await page.locator('.play-button > .normal').first().click();
 // page.on('response', response => console.log('<<', response.status(), response.url()));

//const responsePromise = page.waitForResponse('launch');
//const response = await responsePromise;
//console.log(response);

});