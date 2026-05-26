import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col bg-surface text-on-surface antialiased overflow-hidden select-none">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 bg-surface">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 transform scale-105" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiq4NIenZCJKOV7HpQa9h0k4HFoS78YYeuoiVTrMvrmp_NUSAtorvEPLsZFv5XQxmVY7Z_M4W_EDKuURdFGGkUYNpmvpS4hEtBLVb_zXw5rD1Ep4RBKNgqFTe07YqQcjlYmpnd5_rn8Oz1IH6YQrrQZ1MjKF3-2ahnMJw-50w13gFo_CWXGLdv7qlXsOYRYhgjMIcYyr5zuAPeCwuvFv8JoGNp8fzHgMwh1QySal0ra0Kj9ya4TInV0-_r-sVMh-yjKcN3ueWeHN4Q')",
            animation: 'slowPan 40s ease-in-out infinite'
          }}
        />
        {/* Tonal Layering / Gradients for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/60 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
      </div>

      {/* Inline styles for the background animation */}
      <style>{`
        @keyframes slowPan {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.1) translate(-1%, -1%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
      `}</style>

      {/* Content Canvas */}
      <main className="relative z-10 flex-grow flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto text-center">
          {/* Structural Layering: Huge '404' acting as a textural element */}
          <div aria-hidden="true" className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface opacity-10 tracking-[0.2em] mb-8 select-none pointer-events-none leading-none">
            404
          </div>
          
          {/* Immersive Headline */}
          <h1 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface max-w-4xl mb-6 leading-tight drop-shadow-lg">
            Looks Like The River Took You Somewhere Else.
          </h1>
          
          {/* Supporting Context */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
            The currents of discovery sometimes lead to uncharted shores. Let us guide you back to familiar waters.
          </p>
          
          {/* Primary Action Button (Ghost style with sliding background transition) */}
          <button 
            onClick={() => navigate('/')}
            className="group relative inline-flex items-center justify-center px-8 py-4 border border-outline hover:border-tertiary transition-all duration-500 overflow-hidden cursor-pointer bg-transparent"
          >
            {/* Sliding backdrop */}
            <span className="absolute inset-0 w-full h-full bg-tertiary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            
            {/* Content labels */}
            <span className="relative z-10 font-label-caps text-label-caps text-on-surface group-hover:text-on-tertiary transition-colors duration-500 flex items-center gap-3 tracking-widest text-[11px]">
              <span className="material-symbols-outlined text-[18px]">sailing</span>
              Return to Shore
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
