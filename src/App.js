import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
// import List from './components/list/List';
import View from './pages/view/View';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from 'react-router-dom';

function App() {

  const Layout = () => {
    return (
    <div>
      {/* <Navbar/> */}
      <div>
        <Outlet/>
      </div>
    </div>
    )
  };

  const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { 
      path: '/view', 
      element: <Layout/>,
      children: [
        { path: '/view', element: <View/>}
      ] 
    },
  ]);

  // const router = createBrowserRouter([
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout/>}>
  //       <Route path="/" element={<Home/>}/>,
  //       <Route path="/view" element={<View/>}/>
  //     </Route>
  //   )
  // ]);
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
