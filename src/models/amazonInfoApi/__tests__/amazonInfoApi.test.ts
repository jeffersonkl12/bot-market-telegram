import AmazonInfoApi from '../amazonInfoApi.model.ts'

describe('Testando api amazonInfo', () => {
  test('Testando busca info produto - valido', async () => {
    const idProduto = 'B074KQYMDZ'
    const amazonaInfoAPi = new AmazonInfoApi()

    await expect(
      amazonaInfoAPi.getInfoProduto(idProduto),
    ).resolves.not.toThrow()
  })
})
