import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header'
import NewsletterHorizontal from '../../components/modals/NewsletterHorizontal';
import NewsletterVertical from '../../components/modals/NewsletterVertical';
import Product from '../../components/modals/Product';
import Search from '../../components/modals/Search';
import Cart from '../../components/modals/Cart';
import SizeChart from '../../components/modals/SizeChart';
import WaitingList from '../../components/modals/WaitingList';
import Navbar from '../../components/navbar';
import PromoMessage from '../../components/PromoMessage';
import Countdown from '../../components/Countdown';
import Features from '../../components/Features';
import ProductList from '../../components/product/ProductList';
import LatestReviews from '../../components/LatestReviews';
import Footer from '../../components/footer';


class Home extends Component {
    render(){
        console.log(this.props.data);
        return (
            <div>
                {/* <!-- MODALS --> */}
                <NewsletterHorizontal />
                <NewsletterVertical />
                <Product />
                <Search />
                <Cart />
                <SizeChart />
                <WaitingList />

                <Navbar />
                <Header />

                <PromoMessage />
                <Countdown />
                <Features />

                <ProductList />

                <LatestReviews />

                <Footer />
            </div>
        )
    }
}

//fetch what you want from the store
const mapStateToProps = (state) => {
    return {
        data: state 
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logOut: () => { dispatch(logOut(null)) },
//         loadQuestions: (payload) => { dispatch(loadQuestions(payload)) },
//     }
// }

export default connect(mapStateToProps, null)(Home)