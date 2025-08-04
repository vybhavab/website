"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const helloWorlds = [
  { lang: "English", text: "Hello, World!" },
  { lang: "Spanish", text: "¡Hola, Mundo!" },
  { lang: "French", text: "Bonjour, le monde !" },
  { lang: "German", text: "Hallo, Welt!" },
  { lang: "Kannada", text: "ನಮಸ್ಕಾರ, ಪ್ರಪಂಚ!" },
  { lang: "Japanese", text: "こんにちは、世界！" },
  { lang: "Hindi", text: "नमस्ते, दुनिया!" },
  { lang: "Mandarin", text: "你好，世界！" },
  { lang: "Italian", text: "Ciao, mondo!" },
  { lang: "Russian", text: "Привет, мир!" },
  { lang: "Arabic", text: "مرحبا، العالم!" },
  { lang: "Portuguese", text: "Olá, mundo!" },
  { lang: "Polish", text: "Witaj, świecie!" },
  { lang: "Turkish", text: "Merhaba, Dünya!" },
  { lang: "Ukrainian", text: "Привіт, світ!" },
  { lang: "Vietnamese", text: "Xin chào, thế giới!" },
  { lang: "Indonesian", text: "Halo, Dunia!" },
];

export function HelloWorldAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * helloWorlds.length);
      setIndex(randomIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 text-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={helloWorlds[index].lang}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-lg md:text-xl lg:text-4xl text-muted-foreground"
        >
          {helloWorlds[index].text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
