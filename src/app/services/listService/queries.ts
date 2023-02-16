import {gql} from '@apollo/client'

const FETCH_LIST=gql`
   query FetchAnimeList(
      $page:Int!,
      $perPage:Int!
   ){
      Page(
         page:$page,
         perPage:$perPage
      ){
         media{
            id
            description
            title{
               english
            }
            coverImage{
               extraLarge
            }
         }
      }
   }
`;

export {
   FETCH_LIST
}
