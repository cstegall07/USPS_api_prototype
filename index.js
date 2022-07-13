

const axios = require('axios').default;

const xmlbuilder2 = require('xmlbuilder2');

let root = xmlbuilder2.create({version: '1.0'})
    .ele('AddressValidateRequest', { USERID: '635GOODR3121' })
        .ele('Address')
            .ele('Address1').txt('185 Berry St').up()
            .ele('Address2').txt('Suite 6100').up()
            .ele('City').txt('San Francisco').up()
            .ele('State').txt('CA').up()
            .ele('Zip5').txt('94556').up()
            .ele('Zip4').up()
        .up()
    .up()

let xml = root.end({prettyPrint: true});
console.log(xml)

let url = 'https:// secure.shippingapis.com /ShippingAPI.dll? API=Verify &XML=' + encodeURIComponent(xml);

axios.get(url)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    });
