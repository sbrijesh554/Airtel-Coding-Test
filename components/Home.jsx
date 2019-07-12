import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import styles from './styles.css';
import {getItems} from '../action';
import Item from './Item.jsx';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : '',
            showMenu: false
        }
    }
    
    componentDidMount(){
        this.props.getItems();
    }

    renderItemsList = () => {
        return this.props.items && this.props.items.map((item, i) => {
                return <Item key={i} item = {item}/>
        })
    }
    handleChange = (event) => {
        let showMenu = false;
        if(event.target.value){
            showMenu = true;
        }
        this.setState({value: event.target.value, showMenu});
    }
    showSearchMenu = () => {
        let items =[]; 
        this.props.items.filter((item) => {
            if (item.itemName.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1){
                items.push(item.itemName);
            }
        })
        return (
            <ul className = {styles.borderitem}>
            {items && items.map((item, i) =>{
                return <li key = {i} className={styles.bold}> {item} </li>
            })
            }
            </ul>
            
            
        )
    }
    render(){
        return (
            <div className = "">
                <div className = "col-xs-12 text-center"><button><Link to="/cart">Show Cart</Link></button> Total Items : <span className={styles.bold}>{this.props.cart.length}</span></div>
                <div>
                <input placeholder = "Search Products" className = {styles.fullWidth} type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div>
                    {this.state.showMenu && this.showSearchMenu()}
                </div>
                <div className = "col-xs-12">
                    {this.renderItemsList()}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getItems
},dispatch);

const mapStateToProps = (state) => {
    return ({
        items: state.items.items,
        cart: state.cart.cart
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);