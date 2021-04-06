import { createSelector } from "reselect";

//collection_id_map which is used for mapping the string value to the respective id because when
//we were passing   console.log(match) we were getting the id values which were number and then the
//items with like the title,name and more so these were in strings while the id was in number so we either have to
//convert the string to integers or the integer to string,so now the string value we are getting from the url
//parameter in our case its shop/hats will be the actual property and give hats the id of 1 and same
//for every other that is sneakers,jackets,men for this we are also use selectCollection where we all finding
//you can find more about it in the assets an image is saved with  the name "For the unique id"

//aba bhai dekh jo id thee wo number m thee to hmna yaha us id ko string sa represtn krdia hai
//no.1 id p hats the islia hmna uska brabar show krdia ussa hats:1 krka yanee ab id:1 ko hm hats sa bhee
//represent krskta hai pher hm map krta hai by selector called selectCollection pher url parameter ata hai
//jo k string hai "collectionUrlParam" and we return the createSelector which is called a "Currying" function (see more about it in monster-rolodex,help-material file)
//pher hm apna collections array uthata hai jo k yaha "collections" hai or pher hm uspa find lgata hai jaha
//pher hm match kr rha hai correct id to our  "COLLECTION_ID_MAP" using our string paramter value that we get
//from the url
//or pher jao collection.component.jsx kee file m
// before we were using this
// const COLLECTION_ID_MAP = {
// hats:1,
// sneakers:2,
// jackets:3,
// umm:4,
// mens:5
// }
//now we went to our shop.data converted our array to objects so we dont need this COLLECTION_ID_MAP here anymore
//with making that data as object like removing from starting [] to {} and giving each individual there names
//like hats: ,sneakers: we also made changes at bottom that is seclCollection now simply passing  collections => collections[collectionUrlParam]

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
