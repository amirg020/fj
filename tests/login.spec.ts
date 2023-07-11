import { test, expect } from '@playwright/test';

test('Incorect password', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('amir.1234');
  await page.locator('form').getByRole('button', { name: 'Play Now' }).click();
  const locator = page.locator('.alert');
  await expect(locator).toHaveText('Incorrect username, email or password');
});
test('Incorect username', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('addadaamir_');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('amir.123');
  await page.locator('form').getByRole('button', { name: 'Play Now' }).click();
  const locator = page.locator('.alert').first();
  await expect(locator).toHaveText('Incorrect username, email or password');
});
test('Restriction player', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_3');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('hack.505');
  await page.locator('form').getByRole('button', { name: 'Play Now' }).click();
  const locator = page.locator('.alert').first();
  await expect(locator).toHaveText('Player restricted to login');

});

 /*test('Country restricion', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('amir.123');
  await page.locator('form').getByRole('button', { name: 'Play Now' }).click();
  const locator = page.locator('.alert').first();
  await expect(locator).toHaveText('Country forbidden');

});
*/
test('Sucess Login', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('amir.123');
  await page.locator('form').getByRole('button', { name: 'Play Now' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'profile' }).click();

});

