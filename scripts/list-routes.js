const fs = require('fs');
const axios = require('axios');
const endOfLine = require('os').EOL;

const basepath = 'https://restcountries.eu/rest/v2';

const allCountryPath = `${basepath}/all`;
const eachCountry = `${basepath}/name/`;
const routesFile = './routes.txt';

axios.get(allCountryPath).then(res => {
  const routes = [];
  routes.push('home');
  routes.push('country');
  res.data.forEach(async(item) => {
    const prerenderURL = `country/${item.name}`;
    routes.push(prerenderURL);
  });
  fs.writeFileSync(routesFile, routes.join(endOfLine), 'utf8');

}).catch(e => console.log('error: ', e));

getWidgets = async (widget) => {
  return axios.post(eachWidget, {
                          categoryId: widget.id
                        }).then((response => {
                          return response;
                        }));
}
