import { createClient } from 'contentful'

const client = createClient({
  space: 'gbkd9voarwvz',
  accessToken: '4a20df8d08773eeb5414190fdb174342ca43da8a0db1eaf11d86f033f9c93d48'
})

export const getAllEntries = async () => await client.getEntries({ limit: 50 })
