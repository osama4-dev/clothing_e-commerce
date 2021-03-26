import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

//the linkUrl given in the array of sections is for the MenuItem component where we have used 'histroy.push'
class Directory extends React.Component{
constructor(){
    super();
    this.state={
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
              title: 'womens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              
              id: 4,
              linkUrl: 'shop/womens'
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
}







//s0   '...otherSectionProps' we used a spread operator  which is eqvilent to '{title,imageUrl,id,size,linkUrl}' first then we 
//used it in MenuItem COmponent where '...otherSectionProps' is eqvialent to 'title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}'

render()
{
    return(

        <div className="directory-menu">
        {this.state.sections.map(({id,...otherSectionProps}) => (
            <MenuItem key={id}  {...otherSectionProps} / >
        ))}
        </div>
    )
}
}


export default Directory