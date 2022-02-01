var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

module.exports.main = 
async(inputs, auths, event) => {
const filePath = inputs.filePath
let variablesToReplace = inputs.variablesToReplace
const newFilePath = inputs.newFilePath
// The error object contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({error: error}, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

//Load the docx file as a binary
var content = fs
    .readFileSync(filePath, 'binary');

var zip = new PizZip(content);
var doc;
try {
    doc = new Docxtemplater(zip);
} catch(error) {
    // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
   errorHandler(error);
   throw error
}

if(typeof variablesToReplace !== "object"){
  variablesToReplace = JSON.parse(variablesToReplace)
}
console.log(variablesToReplace)

//set the templateVariables
doc.setData(variablesToReplace);

try {
    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
    doc.render()
}
catch (error) {
    // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
    errorHandler(error);
    throw error
    return
}

var buf = doc.getZip()
             .generate({type: 'nodebuffer'});

// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
fs.writeFileSync(newFilePath, buf);
return newFilePath

}