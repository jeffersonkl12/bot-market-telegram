import { initBrowser } from '../../configs/browser/BrowserConfig.config.ts'
import { LojaInfoApi } from '../../interfaces/global.interface.ts'

const BASE_URL = 'https://www.amazon.com.br'

class AmazonInfoApi implements LojaInfoApi {
  baseUrl: string

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl
  }

  async getInfoProduto(idProduto: string) {
    const page = await (await initBrowser()).newPage({ baseURL: this.baseUrl })

    await page.goto(`/dp/${idProduto}`)

    const title = await page.locator('#productTitle').textContent()
  }
}

export default AmazonInfoApi
