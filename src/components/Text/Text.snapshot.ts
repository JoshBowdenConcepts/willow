import { test, expect } from "@playwright/test";

test.describe("Visual Comparison: Text", () => {
  test("Text / Default", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/iframe.html?viewMode=story&id=components-text--default&globals=&args="
    );

    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
