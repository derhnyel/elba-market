import React, {Component} from 'react'

class Breadcrumb extends Component {
    render(){
        return (
            <nav className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
    
                            {/* <!-- Breadcrumb --> */}
                            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="/">Women's Shoes</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Leather Sneakers
                                </li>
                            </ol>
    
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    
}

export default Breadcrumb