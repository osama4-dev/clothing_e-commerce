//we made this reducer for our state of directory to be placed here

const INITIAL_STATE ={
    sections:[
        {
         title: 'hats',
         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
         id: 1,
         
         linkUrl: 'shop/hats'
       },
       {
         title: 'jackets',
         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
         id: 2,
         linkUrl: 'shop/jackets'
       },
       {
         title: 'sneakers',
         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
         id: 3,
         linkUrl: 'shop/sneakers'
       },
       {
         title: 'umm',
         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
         size: 'large',
         
         id: 4,
         linkUrl: 'shop/umm'
       },
       {
         title: 'mens',
         imageUrl: 'https://i.ibb.co/7rysy5p/Whats-App-Image-2021-03-19-at-9-12-16-PM.jpg',
         size: 'large',
         id: 5,
         
         linkUrl: 'shop/mens'
       }
     ]

}
const directoryReducer =(state= INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer

//now we get this new reducer in our root reducer