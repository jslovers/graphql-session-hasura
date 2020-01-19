const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
    resturants : [Resturant],
    resturant : Resturant,
    foodItems(resturantID : Int) : [FoodItem]
    
}

type Resturant {
    id: ID!
    name : String
    image : String
    rating : Int
    isOpen : Boolean
    FoodItems : [FoodItem]
}

type FoodItem {
    id: ID!
    name : String
    image : String
    rating : Int
    price : Int
    isAvailable : Boolean
}

type User {
    id : ID!
    name : String
}

type Mutation {
    login(email: String, password : String): String

    register(email: String, password : String) : User

    addItemToCart(productid : Int, quantity : Int ) : String
}

`;



module.exports = typeDefs;
