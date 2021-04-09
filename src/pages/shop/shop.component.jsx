import React from "react";
import {Route} from'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
 
//CategoryPage:we are making category page for every thing to show on its individual page as well as we are 
//doing nested route, we are using match and in path of the second Route we are giving /:categoryId telling
//to acces this categoryId as a parameter on the match object when we are inside our category page

//we moved almost everthing in our collections-overview.component file so whatever is written here was applied 
//here before but now is moved to collections-overview.component
//and we did all that to make our collections in its own component

//SO we basically stored the state in a seprate file called as shop.data.js and we are importing that file as SHOP_DATA
//and then we are using it in our state of this file by calling it
const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class  ShopPage extends React.Component{
  state={
    loading:true
  }

 unsubscribeFromSnapshot = null;

 componentDidMount(){
   const {updateCollections}=this.props
  const collectionRef = firestore.collection ('collections');
  //doing this using promise by using .get and then .then
  collectionRef.get().then(snapshot => {
    const collectionsMap=convertCollectionsSnapshotToMap(snapshot)
    updateCollections(collectionsMap)
    this.setState({loading:false})
  })
  
  
 }
  // console.log(match)
  render(){
    const {match} =this.props
    const {loading} = this.state
    return (
      (
  
        //we mapped our collections data so we destructured our collections state here by 'const {collections}=this.state' so we dont have to write this.state.collections
        //whenver we are going to use the state collections, we simply have to write collections now.
        //the other thing we did is getting the key id of the shop data as it is necessary always to differentiate the data and we are using other data as well
        //using the destructuring same as done in directory.component.jsx so we wont have to write data sepratly visit directory.component to understand 
        //in a more better way
          
            <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
            <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
            )
    )
  }
}
   const mapDispatchToProps=dispatch=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
   })

export default connect(null,mapDispatchToProps)(ShopPage)