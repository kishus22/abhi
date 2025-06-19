// src/types.ts
export interface Trainer {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  certifications: string[];
}

export interface Plan {
  id: number;
  name: string;
  description: string;
  priceOptions: {
    duration: string;
    price: string;
  }[];
  features: string[];
  highlighted?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}