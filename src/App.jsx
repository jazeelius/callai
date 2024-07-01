import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Welcome to the home page</h1>
        <NavLink className="text-blue-500" to="/product">
          Go to product page
        </NavLink>
      </div>
    ),
  },

  {
    path: "/product",
    element: (
      <div>
        <h1>Welcome to the product page</h1>
        <NavLink className="text-blue-500" to="/">
          Go to home page
        </NavLink>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
