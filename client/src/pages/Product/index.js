import React, {Component} from 'react'
import Header from '../../components/header'
import Breadcrumb from '../../components/Breadcrumb'
import FullProductDetail from '../../components/product/FullProductDetail'
import FullProductDescription from '../../components/product/FullProductDescription'

class Product extends Component {
    render(){
        return (
            <div>
                <Header />
                <Breadcrumb />
                <FullProductDetail />
                <FullProductDescription />
            </div>
            
        )
    }
}

export default Product