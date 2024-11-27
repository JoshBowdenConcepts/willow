import { test, expect } from "@playwright/test";

test.describe("Visual Comparison: Container", () => {
  test("Container / Default", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/iframe.html?viewMode=story&id=components-container--default&globals=&args="
    );

    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
