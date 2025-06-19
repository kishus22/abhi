// src/data.ts
import { Trainer, Plan, Certificate } from './types';

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Abhishek",
    title: "Fitness Coach",
    image: "abhi.JPG",
    bio: "With over 4 years of experience in personal training, Abhishek specializes in strength training and body transformation programs. His holistic approach combines effective workouts with nutrition coaching.",
    certifications: [
      "Certified Personal Trainer ADVANCED PHYSIQUE TRANSFORMATION MASTER TRAINER LEVEL-1",
      "Strength & Conditioning Specialist",
      "Sports Nutrition Expert"
    ]
  },
  {
    id: 2,
    name: "Abhishek",
    title: "Nutrition & Fitness Expert",
    image: "abhi1.jpeg",
    bio: "Abhi combines his expertise in nutrition science with personalized training protocols. He specializes in women's and Men's fitness and has helped hundreds of clients achieve sustainable results.",
    certifications: [
      "Certified Personal Trainer ADVANCED PHYSIQUE TRANSFORMATION MASTER TRAINER LEVEL-2",
      "Fitness Specialist",
      "Functional Training Expert"
    ]
  },
  {
    id: 3,
    name: "Abhishek",
    title: "Transformation Specialist",
    image: "abhi33 .jpeg",
    bio: "Abhi has a proven track record of helping clients achieve dramatic body transformations. His data-driven approach ensures consistent progress while prioritizing long-term health and wellness.",
    certifications: [
      "Body Transformation Specialist",
      "Advanced Resistance Training",
      "Metabolic Conditioning Expert"
    ]
  }
];

export const plans: Plan[] = [
  {
    id: 1,
    name: 'Plan 1: Online Customized Plan',
    description: 'Customize diet plan + workout plan + all doubts clarification + 24x7 chat/call support + transformation',
    priceOptions: [
      { duration: '1 month', price: '₹6,000/-' },
      { duration: '2 months', price: '₹11,000/-' },
      { duration: '3 months', price: '₹15,000/-' },
      { duration: '4 months', price: '₹19,000/-' },
      { duration: '5 months (+1 month complimentary)', price: '₹24,000/-' },
    ],
    features: [
      'Customized diet plan',
      'Personalized workout plan',
      '24/7 chat & call support',
      'Regular progress tracking',
      'All doubts clarification'
    ]
  },
  {
    id: 2,
    name: 'Plan 2: Online 1:1 Coaching',
    description: 'Live zoom classes 💯 transformation guaranteed + customized diet plans + nutrition guide + customized workout plan',
    priceOptions: [
      { duration: '1 month', price: '₹10,000/-' },
      { duration: '2 months', price: '₹18,000/-' },
      { duration: '3 months', price: '₹26,000/-' },
      { duration: '4 months', price: '₹33,000/-' },
      { duration: '5 months (+1 month complimentary)', price: '₹40,000/-' },
    ],
    features: [
      '1:1 Live Zoom coaching sessions',
      'Guaranteed transformation',
      'Customized diet & nutrition guide',
      'Personalized workout plan',
      '24/7 priority support'
    ]
  },
  {
    id: 3,
    name: 'Plan 3: Online Guidance + Supplements',
    description: 'Transformation guaranteed + customized diet plans + nutrition guide + customized workout plan + supplements',
    priceOptions: [
      { duration: '1 month (₹4,000 supplements free)', price: '₹10,000/-' },
      { duration: '2 months (₹9,500 supplements free)', price: '₹18,000/-' },
      { duration: '3 months (₹15,500 supplements free)', price: '₹26,000/-' },
    ],
    features: [
      'Supplement package included',
      'Guaranteed transformation',
      'Customized diet & nutrition guide',
      'Personalized workout plan',
      '24/7 premium support'
    ]
  }
];

export const certificates: Certificate[] = [
  {
    title: "ADVANCED PHYSIQUE TRANSFORMATION MASTER TRAINER LEVEL-1",
    issuer: "Harry Sandhu, Director",
    date: "2025",
    image: "cif.jpeg",
    description: "Trained others in advanced physique transformation techniques as a certified Master Trainer from Team Boss Fitness Academy in 2025."
  },
  {
    title: "ADVANCED PHYSIQUE TRANSFORMATION MASTER TRAINER LEVEL-2",
    issuer: "Harry Sandhu, Director",
    date: "2025",
    image: "cif2.jpeg",
    description: "Trained others in advanced physique transformation techniques as a certified Master Trainer from Team Boss Fitness Academy in 2025."
  },
  {
    title: "Transformation Specialist Award",
    issuer: "Fitness Excellence Awards",
    date: "2025",
    image: "cert 33.jpg",
    description: "Recognized for outstanding client transformations and sustainable results through evidence-based coaching methodologies."
  },
  {
    "title": "Diploma in Exercise, Nutrition & Supplementation",
    "issuer": "Team Boss Fitness Academy - BOSS International Certification Program",
    "date": "May 2025",
    "image": "cert4.jpg",
    "description": "Awarded to Abhishek M for successfully meeting all requirements of the course in Exercise, Nutrition, and Supplementation."
}
];