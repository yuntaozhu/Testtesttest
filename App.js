
import React from 'https://esm.sh/react@18.2.0';
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import DecorativeElements from './components/DecorativeElements.js';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#19134b] text-white font-sans overflow-hidden">
      <DecorativeElements />
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 sm:p-6 lg:p-8 pt-12 sm:pt-16">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
