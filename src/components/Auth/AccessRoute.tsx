import { Navigate } from 'react-router-dom'
import { useAuth } from '@/services/AuthContext';
import { ReactNode } from 'react';

interface AccessRouteProps {
    children: ReactNode;
}

export default function AccessRoute({ children }: AccessRouteProps) {
    const { userIsAuthenticated } = useAuth()
    return !userIsAuthenticated() ? children : <Navigate to="/accounts/SignIn" />
}
