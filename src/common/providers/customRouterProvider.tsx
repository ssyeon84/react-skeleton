import { ROUTE_PATH } from '@constants/route';
import {
    createBrowserRouter,
    LoaderFunctionArgs,
    redirect,
    RouterProvider
} from 'react-router-dom';

const CustomRouterProvider = () => {
  const router = createBrowserRouter([
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};
export default CustomRouterProvider;