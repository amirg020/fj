import { test, expect } from '@playwright/test';

test('intercom', async ({ page }) => {

  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'How to verify your Phone Number' }).click();
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('go-back').click();
  await page.frameLocator('iframe[name="intercom-launcher-frame"]').getByTestId('launcher-with-badge-cutout-none').click();

  await page.getByRole('paragraph').filter({ hasText: '© Fortunejack.com - All Rights Reserved.' }).click();
  await page.getByText('Copyright © 2014 FortuneJack.com is operated by Nexus Group Enterprises N.V., a ').click();
  await page.getByRole('paragraph').filter({ hasText: '+18' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#apg-seal-link').click();
  const page1 = await page1Promise;
  
});
test('sport', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('amir_2');
  await page.locator('input[type="text"]').press('Tab');
  await page.locator('input[type="password"]').fill('amir.123');
  await page.getByRole('dialog').getByRole('button', { name: 'Play Now' }).click();
  await page.getByRole('link', { name: 'Sports' }).click();
  await page.goto('https://fortunejack.com/sportsbook?bt-path=%2Fsoccer-1');
  await page.locator('div').filter({ hasText: /^draw/ }).locator('span').first().click();
  await page.getByText('Betslip', { exact: true }).click();
  await page.getByRole('button', { name: 'Place Bet' }).click();
  await page.getByRole('button', { name: 'Go to My Bets' }).click();
  await page.getByText('Cash Out').click();
});
test('terms', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  await page.getByText('Terms', { exact: true }).click();
  await page.getByText('Terms & Conditions').click();
  await page.getByRole('paragraph').filter({ hasText: '1.2. The Website is operated by Nexus Group Enterprises N.V., a limited liabilit' }).click();

  await page.getByRole('main').getByRole('listitem').filter({ hasText: 'Privacy Policy' }).nth(0).click();
  await page.getByRole('paragraph').filter({ hasText: 'This Privacy Policy describes the way in which FortuneJack deals with the inform' }).click();
  
  await page.getByRole('main').getByRole('listitem').filter({ hasText: /^Sport T&C$/ }).click();
  await page.getByRole('paragraph').filter({ hasText: '1.1. This set of terms and conditions govern the use of the Sportsbook platform.' }).click();

  await page.getByRole('main').getByRole('listitem').filter({ hasText: 'Prohibited Territories' }).click();
  await page.getByRole('heading', { name: 'Prohibited Territories per provider' }).click();

  await page.getByRole('main').getByRole('listitem').filter({ hasText: 'Bonus T&C' }).click();
  await page.getByRole('paragraph').filter({ hasText: '1. Only players who have verified their email addresses and phone number are abl' }).click();
 
  await page.getByRole('listitem').filter({ hasText: /^Games excluded from Bonus$/ }).click();
  await page.getByRole('heading', { name: 'Games excluded from Bonus' }).click();
 
  await page.getByRole('main').getByRole('listitem').filter({ hasText: 'FAQ' }).click();
  await page.getByRole('heading', { name: 'Are FJ’s games fair?' }).getByText('Are FJ’s games fair?').click();
 
  await page.getByRole('listitem').filter({ hasText: 'Affiliates' }).click();
  await page.getByRole('heading', { name: 'Affiliate', exact: true }).click();

  await page.getByRole('main').getByRole('listitem').filter({ hasText: 'About Us' }).click();
  await page.getByRole('heading', { name: 'Excellence through experience.' }).getByText('Excellence through experience.').click();
});
test('coins', async ({ page }) => {
  await page.goto('https://fortunejack.com/');
  
  await page.getByRole('link', { name: 'Bitcoin' }).click();
  await page.getByRole('heading', { name: 'What Is Bitcoin?' }).click();

  await page.getByText('Litecoin').first().click();
  await page.getByRole('heading', { name: 'Betting at Litecoin casino, Explained' }).click();

  await page.getByText('Dogecoin').first().click();
  await page.getByRole('heading', { name: 'What is Dogecoin Gambling?' }).click();

  await page.getByText('Ethereum').first().click();
  await page.getByRole('heading', { name: 'The Ethereum Platform is the Decentralized Version of the Internet.' }).click();

  await page.getByText('DASH').first().click();
  await page.getByRole('heading', { name: 'The Lowdown on Dash Gambling' }).click();

  await page.locator('div:nth-child(11)').first().click();
  await page.getByRole('heading', { name: 'What is Tron?' }).click();

  await page.getByText('Zcash').first().click();
  await page.getByRole('heading', { name: 'A Quick History of Zcash' }).click();

  await page.getByText('Tether').first().click();
  await page.getByRole('heading', { name: 'What is USDT?' }).click();

  await page.getByText('USD Coin').first().click();
  await page.getByRole('heading', { name: 'What is a USD Coin?' }).click();

  await page.getByText('Binance').first().click();
  await page.getByRole('heading', { name: 'A Quick History of Binance Coin' }).click();

  await page.getByText('Binance USD').first().click();
  await page.getByRole('heading', { name: 'A Quick History of Binance USD' }).click();

  await page.getByText('Polygon').first().click();
  await page.getByRole('heading', { name: 'A Quick History of Polygon Matic' }).click();



});

test('providers', async ({ page }) => {

  await page.goto('https://fortunejack.com/');
  
  await page.getByRole('link', { name: 'Fugaso' }).click();
  await page.getByRole('heading', { name: 'About Fugaso' }).click();

  await page.getByText('1Spin4Win').first().click();
  await page.getByRole('heading', { name: 'About 1Spin4Win' }).click();

  await page.getByText('3oaks').first().click();
  await page.getByRole('heading', { name: 'About 3 Oaks' }).click();

  await page.getByText('Amatic').first().click();
  await page.getByRole('heading', { name: 'About Amatic' }).click();

  await page.getByText('Authentic Gaming').first().click();
  await page.getByRole('heading', { name: 'About Authentic Gaming' }).click();

  await page.getByText('Betgames.tv').first().click();
  await page.getByRole('heading', { name: 'About BetGamesTV' }).click();

  await page.getByText('Belatra Games').first().click();
  await page.getByRole('heading', { name: 'About Belatra' }).click();

  await page.getByText('Betsoft').first().click();
  await page.getByRole('heading', { name: 'About BetSoft' }).click();

  await page.getByText('BGaming').first().click();
  await page.getByRole('heading', { name: 'About BGaming' }).click();

  await page.getByText('Booming Games').first().click();
  await page.getByRole('heading', { name: 'About Booming Games' }).click();

  await page.getByText('Endorphina').first().click();
  await page.getByRole('heading', { name: 'About Endorphina' }).click();

  await page.getByText('Evolution Gaming').first().click();
  await page.getByRole('heading', { name: 'About Evolution Gaming' }).click();

  await page.getByText('Evoplay').first().click();
  await page.getByRole('heading', { name: 'About Evoplay' }).click();

  await page.getByText('GameArt').first().click();
  await page.getByRole('heading', { name: 'About GameArt' }).click();

  await page.getByText('Habanero').first().click();
  await page.getByRole('heading', { name: 'About Habanero' }).click();

  await page.getByText('Hacksaw Gaming').first().click();
  await page.getByRole('heading', { name: 'About Hacksaw Gaming' }).click();

  await page.getByText('Isoftbet').first().click();
  await page.getByRole('heading', { name: 'About iSoftBet' }).click();

  await page.getByText('Playson').first().click();
  await page.getByRole('heading', { name: 'About Playson' }).click();

  await page.getByText('Play\'n GO').first().click();
  await page.getByRole('heading', { name: 'About Play’n Go' }).click();

  await page.getByText('Platipus').first().click();
  await page.getByRole('heading', { name: 'About Platipus' }).click();

  await page.getByText('Playtech').first().click();
  await page.getByRole('heading', { name: 'About Playtech' }).click();

  await page.getByText('Pragmatic Play').first().click();
  await page.getByRole('heading', { name: 'About Pragmatic Play' }).click();

  await page.getByText('Push Gaming').first().click();
  await page.getByRole('heading', { name: 'About Push Gaming' }).click();

  await page.getByText('Quickspin').first().click();
  await page.getByRole('heading', { name: 'About Quickspin' }).click();

  await page.getByText('SteadyGames').first().click();
  await page.getByRole('heading', { name: 'About Steady Games', exact: true }).click();

  await page.getByText('Mascot').first().click();
  await page.getByRole('heading', { name: 'About Mascot Gaming' }).click();

  await page.getByText('Microgaming').first().click();
  await page.getByRole('heading', { name: 'About Microgaming' }).click();

  await page.getByText('NetGame').first().click();
  await page.getByRole('heading', { name: 'About NetGame' }).click();

  await page.getByText('Nolimit City').first().click();
  await page.getByRole('heading', { name: 'About Nolimit City' }).click();

  await page.getByText('NetEnt').first().click();
  await page.getByRole('heading', { name: 'About NetEnt' }).getByText('About NetEnt').click();

  await page.getByText('Orbital').first().click();
  await page.getByRole('heading', { name: 'About Orbital Gaming' }).click();

  await page.getByText('Relax Gaming').first().click();
  await page.getByRole('heading', { name: 'About Relax Gaming' }).click();

  await page.getByText('Yggdrasil').first().click();
  await page.getByRole('heading', { name: 'About Yggdrasil Gaming' }).click();

  await page.getByText('Wazdan').first().click();
  await page.getByRole('heading', { name: 'About Wazdan' }).click();


});
