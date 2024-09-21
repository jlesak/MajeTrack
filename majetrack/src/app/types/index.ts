export interface Investment {
    name: string;
    type: string;
    value: number;
    growth: number;
    transactions: Transaction[];
  }
  
  export interface Transaction {
    type: 'Buy' | 'Sell';
    date: string;
    price: number;
    amount: number;
  }
  
  export interface BankAccount {
    name: string;
    balance: number;
  }