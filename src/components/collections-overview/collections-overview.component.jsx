import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'

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
//selectCollections which we were passing here before collections:selectCollections will not work anymore as
//we have modiefied our shop.data from array to an object and our component using it in collection overview still
//thinks it is an array so we will convery this object into an array by going to shop.selector
//now we will be using selectCollectionsForPreview instead of selectCollections from shop.selector file as we changed
//it from an object into array

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
        })
      

export default connect(mapStateToProps)(CollectionOverview) 