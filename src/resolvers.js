module.exports = {
    Query: {
        resturants: async (_, {  }, { dataSources }) => {
            return [{
                id: "ID!",
                name: "String",
                image: "String",
                rating: "Int",
                isOpen: "Boolean",
            }]
        }
    },
    Mutation: {
    }
};
