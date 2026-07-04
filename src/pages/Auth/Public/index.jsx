import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRouter = ({children}) => {
    
    const user = localStorage.getItem('user') === 'true';

    if(user){
        return <Navigate to={'/'} replace />
    }

    return children;
}

export default PublicRouter