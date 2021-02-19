#!/usr/bin/node
'use scrict'
const fs = require('fs')
const util = require('util')
const https = require('https')
const progress = require('cli-progress')

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
    await util.promisify(fs.writeFile)('scripts/emoji-images.js', 'const COUNTRY_FLAG_EMOJIS = {\n')

    const HOST = 'https://emojipedia.org'
    let flags = (await request.get(`${HOST}/flags/`)).content
    flags = flags.match(/<li>.*? Flag: .*?<\/li>/gm)
    const bar = new progress.SingleBar({
        format: '  [{bar}] {percentage}% | ETA: {eta_formatted} | {value}/{total}',
        barIncompleteChar: ' '
    })
    bar.start(flags.length, 0)
    for (let i = 0; i < flags.length; i++) {
        try {
            let path = flags[i].match(/href="(.*?)"/)[1]
            let flag = (await request.get(`${HOST}${path}`)).content
            let unicode = flag.match(/<h1><span class="emoji">(.*?)<\/span>.*<\/h1>/)[1]
            let image = flag.match(/srcset="(.*?\/thumbs\/240\/twitter\/.*?) 2x"\s/)[1]
            let line = `    "${unicode}": "${image}",\n`
            await util.promisify(fs.appendFile)('scripts/emoji-images.js', line)
            bar.increment()
        } catch {}
    }
    bar.stop()
    await util.promisify(fs.appendFile)('scripts/emoji-images.js', '}\n')
})()
