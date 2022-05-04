import React from 'react';
import { AuthRouter } from './router/AuthRouter';

import './css/main.css'

export const JardinApp = () => {
  return (
    <div className="limiter">
		  <div className="container-login100">
		    <div className="wrap-login100 p-t-50 p-b-90">
          <AuthRouter />
        </div>
      </div>
    </div>
    
  )
}
