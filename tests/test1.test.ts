import { test, expect } from '@playwright/test';

test('Go To UI Playground', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await expect(page).toHaveURL(/uitestingplayground/);
});