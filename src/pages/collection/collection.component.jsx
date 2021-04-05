import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'


const CollectionPage = ({match}) => {
    console.log(match.params.collectionId)
    // so we are getting hats in our console.log after passing this console.log(match.params.categoryId)
    return(
    <div className="collection-page">
    <h2>Collection Page</h2></div>
)}

export default CollectionPage