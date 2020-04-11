import { Entry } from 'contentful'

const contentful = require('contentful')
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries.`)
}

async function fetchEntryByTitle(title: string): Promise<Entry<any>> {
    const entries = await client.getEntries({
        'fields.title' : title,
        'content_type' : 'post'
    })
    const entry = entries.items[0]
    return entry;
}

export { fetchEntries, fetchEntryByTitle }