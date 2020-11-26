#!/usr/bin/node
'use scrict'
const fs = require('fs')
const util = require('util')
const https = require('https')

const request = {}
request.get = async (url) => new Promise((resolve, reject) => {
    https.get(url, (response) => {
        response.content = ''
        response.on('data', (data) => { response.content += data })
        response.on('end', () => {
            resolve({
                statusCode: response.statusCode,
                headers: response.headers,
                content: response.content,
            })
        })
    }).on('error', (error) => { reject(error) })
})

// MAIN PROGRAM
;(async () => {
    const HOST = 'https://emojipedia.org'
    let flags = (await request.get(`${HOST}/flags/`)).content
    await util.promisify(fs.writeFile)('scripts/emoji-images.js', 'const COUNTRY_FLAG_EMOJIS = {\n')
    await flags.match(/<li>.*? Flag: .*?<\/li>/gm).reduce(async (_, item) => {
        try {
            let path = item.match(/href="(.*?)"/)[1]
            let flag = (await request.get(`${HOST}${path}`)).content
            let unicode = flag.match(/<h1><span class="emoji">(.*?)<\/span>.*<\/h1>/)[1]
            let image = flag.match(/srcset="(.*?\/thumbs\/240\/google\/.*?) 2x"\s/)[1]
            let line = `    "${unicode}": "${image}",\n`
            await util.promisify(fs.appendFile)('scripts/emoji-images.js', line)
        } catch {}
    }, [])
    setTimeout(async () => {
        await util.promisify(fs.appendFile)('scripts/emoji-images.js', '}\n')
    }, 1000)
})()
