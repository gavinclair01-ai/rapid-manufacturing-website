import { test, expect } from '@playwright/test';

// ─── Core Pages ───────────────────────────────────────────────────────────────

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1').first()).toBeVisible();
});

test('homepage has no broken nav links', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('nav a');
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href');
    expect(href).not.toBe('#');
    expect(href).not.toBeNull();
  }
});

test('capabilities page loads', async ({ page }) => {
  await page.goto('/capabilities');
  await expect(page).not.toHaveURL(/404/);
  await expect(page.locator('h1').first()).toBeVisible();
});

test('contact page loads', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).not.toHaveURL(/404/);
  await expect(page.locator('h1').first()).toBeVisible();
});

test('quote page loads', async ({ page }) => {
  await page.goto('/quote');
  await expect(page).not.toHaveURL(/404/);
  await expect(page.locator('body')).toBeVisible();
});

// ─── Service Pages ────────────────────────────────────────────────────────────

const services = [
  'cnc-milling',
  'cnc-turning',
  'edm',
  'wire-edm',
  '5-axis-machining',
  'grinding',
  'gear-and-spline-cutting',
  'die-casting',
];

for (const slug of services) {
  test(`service page loads: ${slug}`, async ({ page }) => {
    await page.goto(`/service/${slug}`);
    await expect(page).not.toHaveURL(/404/);
    await expect(page.locator('h1').first()).toBeVisible();
  });
}

// ─── Quote Form ───────────────────────────────────────────────────────────────

test('quote form is visible', async ({ page }) => {
  await page.goto('/quote');
  // Should have some form elements
  const inputs = page.locator('input, textarea, select');
  const count = await inputs.count();
  expect(count).toBeGreaterThan(0);
});

// ─── Footer ───────────────────────────────────────────────────────────────────

test('footer links all work', async ({ page }) => {
  await page.goto('/');
  const footerLinks = page.locator('footer a');
  const count = await footerLinks.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const href = await footerLinks.nth(i).getAttribute('href');
    expect(href).not.toBe('#');
    expect(href).not.toBeNull();
  }
});

test('footer has contact email', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer')).toContainText('sales@rapidmanufacturing.com.au');
});

test('footer has ABN', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer')).toContainText('ABN');
});

// ─── Request a Quote CTA ──────────────────────────────────────────────────────

test('homepage has Request a Quote button', async ({ page }) => {
  await page.goto('/');
  const cta = page.locator('a', { hasText: /request a quote/i }).first();
  await expect(cta).toBeVisible();
  const href = await cta.getAttribute('href');
  expect(href).toMatch(/quote/i);
});

// ─── No console errors ────────────────────────────────────────────────────────

const keyPages = ['/', '/capabilities', '/contact', '/quote', '/service/cnc-milling'];

for (const path of keyPages) {
  test(`no console errors on ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(path);
    await page.waitForTimeout(1000);
    const realErrors = errors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('analytics') &&
      !e.includes('gtag') &&
      !e.includes('convex')
    );
    expect(realErrors).toHaveLength(0);
  });
}

// ─── 404 ─────────────────────────────────────────────────────────────────────

test('404 page shows for unknown routes', async ({ page }) => {
  await page.goto('/this-page-does-not-exist-xyz');
  await expect(page.locator('body')).toContainText(/404|not found/i);
});
