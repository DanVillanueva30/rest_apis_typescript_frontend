import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader, action as updateAvailabilityAction } from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, { loader as EditProductLoader, action as editProductAction } from "./views/EditProduct";
import { action as deleteProductAction }  from "./components/ProductDetails";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products/>,
                action: updateAvailabilityAction,
                loader: productsLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: '/productos/:id/editar', // ROA Pattern - Resource-oriented design.
                element: <EditProduct />,
                action: editProductAction,
                loader: EditProductLoader
            },
            {
                path: '/productos/:id/eliminar',
                action: deleteProductAction
            } 
        ]
    }
]);