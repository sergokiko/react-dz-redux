import React, {Component} from 'react';
import {Header} from "../../components/Header/Header";
import {CartBackdrop} from "../../components/backdrop/backdrop";
import {connect} from 'react-redux'

class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                {this.props.isCartOpen?
                    <CartBackdrop/>: null
                }

            </>
        );
    }

}

function mapStateToProps (state) {
return {
    isCartOpen: state.cartIsOpen
}
}
export default connect(mapStateToProps)(Layout);
