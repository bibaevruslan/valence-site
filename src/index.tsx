import React, {ReactElement, ReactNode} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {BrowserRouter, Route, Outlet} from 'react-router-dom';
import {Routes} from 'react-router';
import Main from './pages/Main/Main';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';
import AuthProvider from './services/AuthContext';
import NotFound from './pages/NotFound/NotFound';
import SignInPage from "@/pages/Account/SignIn/SignInPage.tsx";
import SignUpPage from "@/pages/Account/SignUp/SignUpPage.tsx";
import AccessRoute from "@/components/Auth/AccessRoute.tsx";

function AuthenticatedLayout() {
    return( <>
        <NavBar/>
        <AccessRoute>
            <Outlet />
        </AccessRoute>
        <Footer/>
    </>);
}

function AuthenticationLayout() {
    return <Outlet />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/" element={<AuthenticatedLayout />}>
                            <Route index element={<Main />}/>
                            <Route path="publications" element={<Catalog/>}/>
                            <Route path="accounts" element={<div>Profile</div>}/>
                        </Route>
                        <Route path="/accounts" element={<AuthenticationLayout />}>
                            <Route path="signUp" element={<SignUpPage/>}/>
                            <Route path="signIn" element={<SignInPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
)
