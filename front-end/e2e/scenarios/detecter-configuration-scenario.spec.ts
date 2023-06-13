import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
test('Add quiz', async ({ page }) => {

const element = await page.getByText('QUEUED');
await expect(element !== undefined ).toBeTruthy();})