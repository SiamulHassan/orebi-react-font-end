import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Home/Shop";
import About from "./pages/Home/About";
import Contacts from "./pages/Home/Contacts";
import Login from "./pages/Home/Login";
import SignUp from "./pages/Home/SignUp";
import Checkout from "./components/layout/Checkout";
import Error from "./pages/Home/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Shop />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
