import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import {removeFromCart} from '../action';
import {bindActionCreators} from 'redux';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.items = [];
    }
    componentWillMount(){
        // let count = 0;
        // let id = 1;
        // this.items = this.props.cart.filter(function (item, i) {
        //      if(item.id == id){
        //          count++;
        //      }
        //      else{
        //          count = 0;
        //          id
        //           item["count"] = count;
        //      return item;
        //     }
        //   });
        // let previousId = 0;
        // let count = 0;
        // this.items = this.props.cart;
        // this.items.sort((a,b) => a.id - b.id);
        // this.items.map((item, i) => {
        //     if(previousId && previousId == item.id){
        //         count++;
        //     }
        //     else{
        //         let id = previousId - 1;
        //         previousId  = item.id;
        //         if(i-1 > -1){
        //             this.items[id]['count'] = count;
        //         }
        //         count = 1;
        //     }
        // });
    }

    removeFromCart = (id) => {
        this.props.removeFromCart(id);
    }    
    render(){
        return (
            <div className = "col-xs-12"> Items Selected:
                {this.props.cart.map((item, i) => {
                    return <div>
                    <ul className={styles.borderitem} key = {i}>
                    <li>{item.itemName}</li>
                    <li>{item.price}</li>
                    </ul>
                    <button onClick = {() => this.removeFromCart(item.id)}>Remove</button>
                    </div>
                })}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        cart: state.cart.cart
    })
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    
    removeFromCart : (id) =>  removeFromCart(id) 
},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Cart);