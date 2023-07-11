import { test, expect } from '@playwright/test';

test('Sign-up', async ({ page }) => {
  const rando = Math.random().toString(36).substring(2,7);
  let randomstring = 'testp1' + rando;
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign Up', exact: true }).click();
  await page.locator('#email').fill('a.azeri@live.com');
  await page.getByText('Sorry... email already taken').click();
  await page.locator('#email').click();
  await page.locator('#email').fill('a.azeri@live.');
  await page.getByText('Please, enter a valid email address').click();
  await page.locator('#email').click();

  await page.locator('#email').fill(randomstring+'@gmail.com');
  await page.locator('#username').click();
  await page.locator('#username').fill('amir_2');
  await page.getByText('Sorry... username already taken').click();
  await page.locator('#username').click();
  await page.locator('#username').fill('amir');
  await page.getByText('Username must have at least 5 characters').click();
  await page.locator('#username').click();
  await page.locator('#username').fill(randomstring);
  await page.locator('#new-password').click();
  await page.locator('#new-password').fill('amir.123');
  await page.getByText('Fair', { exact: true }).click();
  await page.locator('#new-password').click();
  await page.locator('#new-password').fill('Amir.123');
  await page.locator('form label span').click();
  await page.waitForTimeout(5000);
  //await page.waitForLoadState('networkidle');
  await page.locator('form').getByRole('button', { name: 'Play Now' }).waitFor();
  await page.locator('form').getByRole('button', { name: 'Play Now'}).click();
  await page.getByRole('heading', { name: 'Only 2 Steps Away From Bonus' }).click();
});