// Simple authentication utilities for demo purposes
// In production, use a proper authentication service

export interface Customer {
  id: string;
  email: string;
  name: string;
  purchaseDate: string;
  hasLifetimeAccess: boolean;
  hasSubscription: boolean;
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
  subscriptionEndDate?: string;
}

export const mockCustomers: Customer[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo Customer',
    purchaseDate: '2024-01-15',
    hasLifetimeAccess: true,
    hasSubscription: true,
    subscriptionStatus: 'active',
    subscriptionEndDate: '2025-02-15'
  }
];

export const authenticateCustomer = (email: string, purchaseId: string): Customer | null => {
  // In production, this would verify with your payment processor
  const customer = mockCustomers.find(c => c.email === email);
  
  if (customer) {
    // Store authentication in localStorage (use secure tokens in production)
    localStorage.setItem('ai_profit_purchased', 'true');
    localStorage.setItem('ai_profit_subscription', customer.hasSubscription.toString());
    localStorage.setItem('customer_data', JSON.stringify(customer));
    return customer;
  }
  
  return null;
};

export const checkAccess = (requiresSubscription: boolean = false): boolean => {
  const hasPurchased = localStorage.getItem('ai_profit_purchased') === 'true';
  const hasSubscription = localStorage.getItem('ai_profit_subscription') === 'true';
  
  if (requiresSubscription) {
    return hasSubscription;
  }
  
  return hasPurchased;
};

export const logout = (): void => {
  localStorage.removeItem('ai_profit_purchased');
  localStorage.removeItem('ai_profit_subscription');
  localStorage.removeItem('customer_data');
};

// Simulate purchase completion
export const completePurchase = (email: string, includeSubscription: boolean = false): void => {
  const customer: Customer = {
    id: Date.now().toString(),
    email,
    name: email.split('@')[0],
    purchaseDate: new Date().toISOString().split('T')[0],
    hasLifetimeAccess: true,
    hasSubscription: includeSubscription,
    subscriptionStatus: includeSubscription ? 'active' : 'inactive',
    subscriptionEndDate: includeSubscription ? 
      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : 
      undefined
  };
  
  localStorage.setItem('ai_profit_purchased', 'true');
  localStorage.setItem('ai_profit_subscription', includeSubscription.toString());
  localStorage.setItem('customer_data', JSON.stringify(customer));
};