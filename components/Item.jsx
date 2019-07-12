import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import {bindActionCreators} from 'redux';
import {addItem} from '../action';
class Item extends React.Component{
    constructor(props){
        super(props);
    }
    addToCart = () => {
        this.props.addItem(this.props.item);
    }
    render(){
        return (
            <div className = {`${styles.borderitem} col-xs-3`}>
                <p><span className = {styles.bold}>Discount:</span> {this.props.item.itemDiscount}</p>
                <div><img className = {styles.fullWidth} src="../image/img.png"/></div>
                <p><span className = {styles.bold}>Name</span> : {this.props.item.itemName}</p>
                <div><span className = {styles.bold}>Price:</span> <span>{this.props.item.price}</span><button onClick = {this.addToCart}>Add To Cart</button></div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    addItem
},dispatch);


export default connect(null, mapDispatchToProps)(Item);