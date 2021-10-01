import Header from './components/header';
import Footer from './components/footer';
import ProductList from './components/productList';
import ProductPage from './screen/productPage';
import SignInUser from './screen/signin';
import {Route} from 'react-router-dom';
import CartList from './screen/cartList';
import ShippingAddress from './screen/shippingAddress';
import UserRegister from './screen/userRegister';
import PlaceOrderScreen from './screen/placeOrderScreen';
import OrderSummery from './screen/orderSummery';
import OrderHistory from './screen/orderHistoryScreen';
import ProfileScreen from './screen/profileScreen';
import Dashboard from './adminScreen/dashboard';
import AdminRoute from './components/isAdmin';
import CreateProduct from './adminScreen/createProduct';
import EditProduct from './adminScreen/editProduct';
import {ProductList as ProductListArr} from './adminScreen/productlist';
function App() {
  return (
    <div className="grid-container">
     <Header/>
     <Route path='/profile' component={ProfileScreen} />
     <Route path='/orderHistory' component={OrderHistory} />
     <Route path='/ordersummery/:id' component={OrderSummery} />
     <Route path='/placeorder' component={PlaceOrderScreen} />
     <Route path='/shipping' component={ShippingAddress} />
     <Route path='/register' component={UserRegister } />
     <Route path='/signin' component={SignInUser}/>
     <Route path='/cart/:id?' component={CartList} />
     <Route path='/product/:id' component={ProductPage} /> 
     <Route
         path='/admin/dashboard'
         render={(props)=><AdminRoute redirect={Dashboard} props={props}/>}
     />
     <Route
         path='/admin/productlst'
         render={(props)=><AdminRoute redirect={ProductListArr} props={props} />}
     />
     <Route 
        path='/admin/createProduct'
        render={(props)=><AdminRoute redirect={CreateProduct} props={props} />}
     />
     <Route
       path='/admin/:id/edit'
       render={(props)=><AdminRoute redirect={EditProduct} props={props} />}
     />
     <Route exact path='/' component={()=>(
       <div>
          <ProductList/>
       </div>
       )}/>
     <Footer />
    </div>
  );
}

export default App;
