'use strict'
const fs = require('fs')
const vm = require('vm')
const util = require('util')
const { exec } = require('child_process')
const progress = require('cli-progress')

;(async () => {
    let content = await util.promisify(fs.readFile)('scripts/emoji-images.js', 'utf8')
    new vm.Script(content).runInThisContext()

    let flags = Object.values(COUNTRY_FLAG_EMOJIS)
    const bar = new progress.SingleBar({
        format: '  [{bar}] {percentage}% | ETA: {eta_formatted} | {value}/{total}',
        barIncompleteChar: ' '
    })
    bar.start(flags.length, 0)
    for (let i = 0; i < flags.length; i++) {
        await exec(`cd images/twitter && curl -O ${flags[i]}`)
        bar.increment()
    }
    bar.stop()
})()
