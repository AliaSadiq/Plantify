
import Sidebar from '../components/shop/dashboard/sidebar';
// import SocialGroupverificationPage from './pages/social-group-verification-page';
// import SocialGroupPage from './pages/social-groups-page';
// import Profile from './profileComp/profile-full';
// import Reports from '../pages/shop/dashboard/Reports';
import Dashboard from '../pages/shop/dashboard/dashboard';
import CreateProduct from '../pages/shop/dashboard/create-product';
import ManageOrders from '../pages/shop/dashboard/manage-orders';
import EditProduct from '../pages/shop/dashboard/edit-product';
// import UsersPage from './pages/users-page';
// import Login from './pages/auth/login';
// import Signup from './pages/auth/signup';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from '../pages/shop/dashboard/product-list';
import OrderDetail from "../pages/shop/dashboard/orders-detail";
function Layout() {
  return (
      <>
        <Sidebar />
        <Routes>
          <Route path="/"  element={<Dashboard/>}/>
          <Route path="create-product" element={<CreateProduct/>} />
          <Route path="product-list" element={<ProductList/>}/>
          <Route path="edit-product/:productId" element={<EditProduct/>}/>
          <Route path="manage-orders" element={<ManageOrders/>} />
          <Route path="orders-detail/:id" element={<OrderDetail />} />
        </Routes>
    </>
  );
}

export default Layout;
