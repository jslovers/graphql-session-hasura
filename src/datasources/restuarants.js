const { RESTDataSource } = require('apollo-datasource-rest');


class RestuarantsDatasource extends RESTDataSource 
    {
        async getResturants()
            {
                // const response = await new Promise(function(resolve, reject){
                //     DB.find({}, {}, function(err, docs){
                //         if(err) { reject(err); return false };
                //         return resolve(docs);
                //     })
                // })
                // return response;
                return [];
            }
    }

module.exports = RestuarantsDatasource;