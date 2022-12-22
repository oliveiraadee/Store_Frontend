import React, { useEffect } from 'react';
import Tabs from '../components/Tabs';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Login from '../components/Login';
import Register from '../components/Register';
import AddProduct from '../components/AddProduct';
import { fetchProduct } from '../actions/products.actions';
import { authenticate } from '../actions/auth.actions';
import { useDispatch, useSelector } from "react-redux";


function Aside(props) {

  // const product = useSelector(state => state.productsReducer.product)

  const { products } = props;
  const { cart } = props;
  const { logged } = props;
  const dispatch = useDispatch();
  let type = ''

  useEffect(() => {
    dispatch(authenticate({ token: localStorage.getItem('token') }));
    console.log('Cart',cart)
  }, [dispatch])

  const tabs1 =
    [{ title: 'Products', component: <Products products={products} /> },
    {
      title: 'Register', component:
        <Register title="Adding Product"
          buttonValue="Register"
          key={1}> </Register>
    },
    {
      title: 'Login', component: <Login title="Login"
        buttonValue="Login"
        key={1}> </Login>
    }
    ]

  type === 'admin' && tabs1.push({
    title: 'Dashboard', component: <Register title="Adding Product"
      buttonValue="Add"
      key={1}> </Register>
  });

  logged === true && tabs1.pop();

  logged === true && tabs1.pop();

  logged === true && tabs1.push({
    title: 'Cart', component:
      <Cart cart={cart} products={products} />
  });

  return (
    <><Tabs selectedTab={"0"} tabs={tabs1} /></>
  );

}
export default Aside;
