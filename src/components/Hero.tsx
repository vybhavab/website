import React, { useEffect, useRef } from 'react';
import Typed, { TypedOptions } from 'typed.js';

interface HeroProps {
  heroTitle: string;
  heroTitleList?: string[];
  heroContent: JSX.Element;
  mobileHeroContent: JSX.Element;
}

const Hero = ({
  heroTitle, heroTitleList, heroContent, mobileHeroContent,
}: HeroProps): JSX.Element => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options:TypedOptions = {
      strings: heroTitleList,
      typeSpeed: 70,
      backSpeed: 100,
      showCursor: false,
      shuffle: true,
      loop: true,
      backDelay: 500,
    };

    if (el && el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) { typed.current.destroy(); }
    };
  });

  return (
    <div
      className="hero bg-base-200 h-64 md:h-96"
    >
      <div className="hero-content flex-col">
        <div className="w-fit will-change-contents">
          {
            (heroTitleList && heroTitleList.length > 0)
              ? <span className="font-extrabold will-change-contents p-2 text-4xl lg:text-8xl drop-shadow-md shadow-white text-center" ref={el}>{heroTitle}</span>
              : <h1 className="font-extrabold will-change-contents p-2 text-4xl lg:text-8xl drop-shadow-md shadow-white text-center">{heroTitle}</h1>
          }
        </div>
        <div className="md:hidden">
          { mobileHeroContent }
        </div>
        <div className="hidden md:block text-left">
          { heroContent }
        </div>

      </div>
    </div>
  );
};

Hero.defaultProps = {
  heroTitleList: [],
};

export default Hero;
