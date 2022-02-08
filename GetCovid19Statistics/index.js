const main = async (inputs, auths, context) => {

    const covid19 = require('covid19-stats');
    
    const country = inputs.COUNTRY;

    var stats = await covid19.getCountry(country);

    return stats;
}

module.exports.main = main
