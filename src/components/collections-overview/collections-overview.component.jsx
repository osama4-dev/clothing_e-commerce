import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/shop/shop.selector'

import CollectionPreiview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'

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