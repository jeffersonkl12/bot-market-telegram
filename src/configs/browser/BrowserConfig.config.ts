import { Browser, chromium } from '@playwright/test'

let BROWSER_BASE: Browser | null = null

export async function initBrowser() {
  if (!BROWSER_BASE) {
    BROWSER_BASE = await chromium.launch({ headless: true })
  }

  return BROWSER_BASE
}
