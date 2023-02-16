import { InMemoryCache, ApolloClient } from "@apollo/client";

const cache=new InMemoryCache({
   typePolicies:{
      Query:{
         fields:{
            lists:{
               merge(existing, incoming){
                  return incoming;
               }
            }
         }
      }
   }
})

export const client=new ApolloClient({
   uri:'http://graphql/anilist.co',
   cache,
})
