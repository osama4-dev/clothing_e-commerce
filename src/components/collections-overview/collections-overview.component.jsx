import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/shop/shop.selector'

import CollectionPreiview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'
//for finding the details of this CollectionOverview component you will find it in 
//shop.component.jsx file as everything here was done before the info was noted first there
//the work was later brought here

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
    {collections.map(({id , ...otherCollectionProps})=>(
        <CollectionPreiview key={id}{...otherCollectionProps}/>
    ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectCollections
        })
      

export default connect(mapStateToProps)(CollectionOverview) 