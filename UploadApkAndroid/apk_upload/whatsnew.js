const fs = require("fs")
const path = require("path")
const { readFileSync } = require("fs")

module.exports.readLocalizedReleaseNotes = async (whatsNewDir) => {
  if (whatsNewDir != undefined && whatsNewDir.length > 0) {
    const releaseNotes = fs.readdirSync(whatsNewDir)
      .filter(value => /whatsnew-.*-.{2,3}\b/.test(value));
    const pattern = /whatsnew-(?<local>.*-.*)/;

    let localizedReleaseNotes = [];

    releaseNotes.forEach(value => {
      const matches = value.match(pattern)
      if (matches != undefined && matches.length == 2) {
        const lang = matches[1];
        const filePath = path.join(whatsNewDir, value);
        const content = readFileSync(filePath, 'utf-8');

        if (content != undefined) {
          localizedReleaseNotes.push(
            {
              language: lang,
              text: content
            }
          )
        }
      }
    });

    return localizedReleaseNotes
  }
  return undefined
}