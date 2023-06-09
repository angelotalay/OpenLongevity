import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./pages/Root/RootLayout";
// import Home from './pages/Home/Home'
// import About from './pages/About/About'
import RootQuestion from "./pages/Root/RootQuestion";
import Question, {loader as getQuestions} from "./pages/Question/Question";
import './index.css'

const router = createBrowserRouter([
  {path: 'open-problems', element:<RootQuestion/>,children:[
    {index: true, element: <Question/>, loader:getQuestions}
  ]}])
//Uncompleted home pages:
// {path: '/', element: <RootLayout/> ,children:[
//   {path: '', index: true, element: <Home/>},
//   {path: 'About', element: <About/>}]}

function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
