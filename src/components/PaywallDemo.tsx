import React, { useState } from 'react';
import LoginForm from './LoginForm';
import CustomerDashboard from './CustomerDashboard';
import { checkAccess } from '../utils/auth';

const PaywallDemo: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAccess());

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <CustomerDashboard />;
  }

  return <LoginForm onSuccess={handleLoginSuccess} />;
};

export default PaywallDemo;