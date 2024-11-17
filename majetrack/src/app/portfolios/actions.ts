"use server";

import api from "@/app/utils/api";


export interface Portfolio {
    name: string;
    type: string;
    valueNow: number;
    investedAmount: number;
    totalProfit: number;
  }
  
  export interface NewPortfolioFormData {
    name: string;
    type: string;
    currencyCode: string;
  }

export async function getPortfolios(): Promise<Portfolio[]> {
  try {
    const response = await api.get('/portfolios');
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return [];
  }
}

export async function createPortfolio(formData: NewPortfolioFormData): Promise<Portfolio | null> {
  try {
    const response = await api.post('/portfolios', formData);
    return response.data;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    return null;
  }
}
