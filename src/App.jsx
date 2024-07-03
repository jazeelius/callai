import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Pages
import LandingPage from "./pages/LandingPage";
import Test from "./pages/Test";

//Layout
import RootLayout from "./Layouts/RootLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="test" element={<Test />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
