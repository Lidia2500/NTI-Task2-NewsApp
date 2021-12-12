const request = require('request');

const news = (callback) => {
    const url = `https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=2f706dab0e40468fb72ba2527591578a`;

    request({url,json:true}, (error, response) => {
        if (error) {
            callback('Unable to get news',undefined);
        } else if (response.body.message) {
            callback(response.body.message,undefined);
        } 
    
         else {
         
            callback(undefined,response.body);
        }
    });
}

module.exports = news