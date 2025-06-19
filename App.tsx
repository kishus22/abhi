import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrainerSection } from './components/TrainerSection';
import { PlansSection } from './components/PlansSection';
import { CertificatesSection } from './components/CertificatesSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrainerSection />
        <PlansSection />
        <CertificatesSection />

        {/* Enroll Now Button */}
        <div className="flex justify-center my-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfuH3jMqineuqI_Sjgotv_uWPyuOQ3piJ7ECZsqTksckOxRHQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
