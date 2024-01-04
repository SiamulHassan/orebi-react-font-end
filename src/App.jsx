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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Shop />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
