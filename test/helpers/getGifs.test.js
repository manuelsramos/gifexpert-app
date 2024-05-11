import { getGifs } from "../../src/helpers/getGifs"

describe('Test getGifs.js', () => {
  test('Must return an array', async () => {

    const gifs = await getGifs('Saint Seiya')
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })


  })

})