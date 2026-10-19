
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Code, Rocket } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      title: 'First, we define the direction.',
      subtitle: '01 / DISCOVER & STRATEGY',
      label: 'DISCOVERY',
      progress: 25,
      side: 'right',
      rotation: 'rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Compass className="w-6 h-6" />,
      desc: 'Turn an initial idea into a clear direction. Establish the goals, explore references, and map out the experience before design begins.'
    },
    {
      num: '02',
      title: 'Then, we give it character.',
      subtitle: '02 / DESIGN & INTERACTION',
      label: 'DESIGN',
      progress: 50,
      side: 'left',
      rotation: '-rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Palette className="w-6 h-6" />,
      desc: 'Build a distinctive visual language through bold colors, expressive typography, balanced layouts, and meaningful micro-interactions.'
    },
    {
      num: '03',
      title: 'Make every detail work.',
      subtitle: '03 / DEVELOPMENT & MOTION',
      label: 'DEVELOPMENT',
      progress: 75,
      side: 'right',
      rotation: 'rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Code className="w-6 h-6" />,
      desc: 'Bring the design to life with responsive code, fluid scrolling, carefully timed transitions, and interactive details that feel natural.'
    },
    {
      num: '04',
      title: 'Ready for the real world.',
      subtitle: '04 / TESTING & LAUNCH',
      label: 'LAUNCH',
      progress: 100,
      side: 'left',
      rotation: '-rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Rocket className="w-6 h-6" />,
      desc: 'Refine performance, check responsiveness, test interactions, and launch a finished experience that looks right and works reliably.'
    }
  ];

  return (
    <section
      id="process"
      className="relative w-full bg-white text-black py-28 px-6 sm:px-8 lg:px-12 bg-grid-pattern overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-neutral-50 shadow-sm text-xs font-mono uppercase tracking-widest text-black/70 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
            <span>HOW WE WORK</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-black leading-tight mb-6"
          >
            From bold ideas to digital experiences that stand out.
          </motion.h2>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            Every great experience starts with an idea. I turn ideas into
            thoughtful designs and interactive websites with creativity
            and precision.
          </motion.p>

          {/* Hand-drawn Sketch Arrow */}
          <div className="hidden lg:block absolute -right-16 top-10 pointer-events-none transform rotate-12 text-[#FF2A2A]">
            <svg
              width="84"
              height="60"
              viewBox="0 0 100 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M10,15 C35,5 65,15 85,45 M85,45 L70,42 M85,45 L80,30" />
            </svg>
            <span className="font-handwritten text-lg font-bold text-black -ml-4 block">
              Follow the path
            </span>
          </div>
        </div>

        {/* Curved Dashed Timeline - Preserved */}
        <div className="hidden md:block absolute top-[280px] bottom-36 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[950px] pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 950"
            fill="none"
          >
            <path
              d="M 400,0
                 C 720,120 720,240 400,320
                 C 80,400 80,560 400,640
                 C 720,720 720,860 400,950"
              stroke="#222222"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              className="opacity-70"
            />
          </svg>
        </div>

        {/* Process Cards */}
        <div className="relative z-10 space-y-16 md:space-y-28 my-12">
          {steps.map((step, index) => {
            const isRight = step.side === 'right';
            const isActive = activeStep === index + 1;

            return (
              <div
                key={step.num}
                className={`flex flex-col md:flex-row items-center w-full ${
                  isRight ? 'md:justify-end' : 'md:justify-start'
                }`}
                onMouseEnter={() => setActiveStep(index + 1)}
              >
                {/* Card - Existing Animation and Interaction Preserved */}
                <motion.div
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.03 }}
                  className={`w-full md:w-[460px] rounded-[2rem] p-8 md:p-10 transition-all duration-500 cursor-pointer relative shadow-xl ${
                    step.rotation
                  } ${step.hoverRotation} ${
                    isActive
                      ? 'bg-[#FF2A2A] text-white shadow-glow-red'
                      : 'bg-white text-black border border-neutral-200 hover:border-[#FF2A2A]/40'
                  }`}
                >
                  {/* Card Eyelet */}
                  <div className="flex items-center justify-center -mt-4 mb-6">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-inner ${
                        isActive
                          ? 'border-white/40 bg-black/20'
                          : 'border-neutral-300 bg-neutral-100'
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full ${
                          isActive ? 'bg-white' : 'bg-neutral-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Number and Icon */}
                  <div className="flex items-baseline justify-between mb-8">
                    <span
                      className={`font-serif italic font-bold text-4xl sm:text-5xl tracking-tight transition-colors ${
                        isActive ? 'text-black/30' : 'text-neutral-300'
                      }`}
                    >
                      {step.num}
                    </span>

                    <div
                      className={`p-3 rounded-2xl transition-colors ${
                        isActive
                          ? 'bg-black/20 text-white'
                          : 'bg-neutral-100 text-black'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Card Headline */}
                  <h3
                    className={`text-2xl sm:text-3xl font-black font-sans tracking-tight leading-tight mb-6 ${
                      isActive ? 'text-white' : 'text-black'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Card Category */}
                  <span
                    className={`block text-sm sm:text-base font-medium uppercase tracking-wide mb-5 ${
                      isActive
                        ? 'text-white/85'
                        : 'text-[#FF2A2A] font-semibold'
                    }`}
                  >
                    {step.subtitle}
                  </span>

                  {/* Card Description */}
                  <p
                    className={`text-base sm:text-lg leading-relaxed ${
                      isActive ? 'text-white/90' : 'text-neutral-600'
                    }`}
                  >
                    {step.desc}
                  </p>

                  {/* Progress Section */}
                  <div className="mt-8 pt-6 border-t border-current/20">
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span
                        className={`text-sm sm:text-base uppercase tracking-wide ${
                          isActive
                            ? 'text-white/90'
                            : 'text-neutral-600'
                        }`}
                      >
                        {step.label}
                      </span>

                      <span
                        className={`text-3xl sm:text-4xl font-bold tracking-tight tabular-nums ${
                          isActive ? 'text-white' : 'text-black'
                        }`}
                      >
                        {step.progress}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div
                      className={`w-full h-2.5 rounded-full overflow-hidden ${
                        isActive ? 'bg-white/30' : 'bg-neutral-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${step.progress}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`h-full rounded-full ${
                          isActive ? 'bg-white' : 'bg-[#FF2A2A]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Interactive Status Indicator */}
                  <div className="mt-5 flex items-center justify-between text-xs font-mono">
                    <span
                      className={
                        isActive ? 'text-white/70' : 'text-neutral-400'
                      }
                    >
                      STAGE {step.num} OF 04
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 font-bold ${
                        isActive ? 'text-white' : 'text-neutral-700'
                      }`}
                    >
                      {isActive ? 'CURRENTLY ACTIVE' : 'TAP TO INSPECT'}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom Handwritten Section - Preserved */}
        <div className="text-center pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block transform -rotate-2"
          >
            <span className="font-handwritten text-4xl sm:text-5xl font-black text-black tracking-wide relative">
              "Ready to be delivered!"

              {/* Hand-drawn Underline */}
              <svg
                className="w-full h-4 text-[#FF2A2A] absolute -bottom-3 left-0"
                viewBox="0 0 200 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M5,10 Q 50,2 100,10 T 195,8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
