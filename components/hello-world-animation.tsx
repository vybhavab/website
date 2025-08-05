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
  { lang: "Korean", text: "안녕하세요, 세계!" },
  { lang: "Thai", text: "สวัสดี, โลก!" },
  { lang: "Greek", text: "Γεια σου, κόσμε!" },
  { lang: "Hebrew", text: "שלום, עולם!" },
  { lang: "Dutch", text: "Hallo, wereld!" },
  { lang: "Swedish", text: "Hej, världen!" },
  { lang: "Norwegian", text: "Hei, verden!" },
  { lang: "Danish", text: "Hej, verden!" },
  { lang: "Finnish", text: "Hei, maailma!" },
  { lang: "Czech", text: "Ahoj, světe!" },
  { lang: "Hungarian", text: "Helló, világ!" },
  { lang: "Romanian", text: "Salut, lume!" },
  { lang: "Bulgarian", text: "Здравей, свят!" },
  { lang: "Croatian", text: "Pozdrav, svijete!" },
  { lang: "Serbian", text: "Здраво, свете!" },
  { lang: "Slovak", text: "Ahoj, svet!" },
  { lang: "Slovenian", text: "Pozdravljeni, svet!" },
  { lang: "Estonian", text: "Tere, maailm!" },
  { lang: "Latvian", text: "Sveika, pasaule!" },
  { lang: "Lithuanian", text: "Labas, pasauli!" },
  { lang: "Icelandic", text: "Halló, heimur!" },
  { lang: "Welsh", text: "Helo, byd!" },
  { lang: "Irish", text: "Dia dhuit, domhan!" },
  { lang: "Scottish Gaelic", text: "Halò, saoghal!" },
  { lang: "Basque", text: "Kaixo, mundua!" },
  { lang: "Catalan", text: "Hola, món!" },
  { lang: "Galician", text: "Ola, mundo!" },
  { lang: "Maltese", text: "Bonġu, dinja!" },
  { lang: "Albanian", text: "Përshëndetje, botë!" },
  { lang: "Macedonian", text: "Здраво, свету!" },
  { lang: "Bosnian", text: "Zdravo, svijete!" },
  { lang: "Montenegrin", text: "Zdravo, svijete!" },
  { lang: "Bengali", text: "হ্যালো, বিশ্ব!" },
  { lang: "Tamil", text: "வணக்கம், உலகம்!" },
  { lang: "Telugu", text: "హలో, ప్రపంచం!" },
  { lang: "Malayalam", text: "ഹലോ, ലോകം!" },
  { lang: "Gujarati", text: "હેલો, વિશ્વ!" },
  { lang: "Punjabi", text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਸੰਸਾਰ!" },
  { lang: "Marathi", text: "नमस्कार, जग!" },
  { lang: "Urdu", text: "ہیلو، دنیا!" },
  { lang: "Persian", text: "سلام، دنیا!" },
  { lang: "Pashto", text: "سلام، نړۍ!" },
  { lang: "Dari", text: "سلام، جهان!" },
  { lang: "Kurdish", text: "Silav, cîhan!" },
  { lang: "Armenian", text: "Բարև, աշխարհ!" },
  { lang: "Georgian", text: "გამარჯობა, მსოფლიო!" },
  { lang: "Azerbaijani", text: "Salam, dünya!" },
  { lang: "Kazakh", text: "Сәлем, әлем!" },
  { lang: "Uzbek", text: "Salom, dunyo!" },
  { lang: "Kyrgyz", text: "Салам, дүйнө!" },
  { lang: "Tajik", text: "Салом, ҷаҳон!" },
  { lang: "Turkmen", text: "Salam, dünýä!" },
  { lang: "Mongolian", text: "Сайн байна уу, дэлхий!" },
  { lang: "Tibetan", text: "བཀྲ་ཤིས་བདེ་ལེགས། འཛམ་གླིང་།" },
  { lang: "Burmese", text: "မင်္ဂလာပါ၊ ကမ္ဘာ!" },
  { lang: "Khmer", text: "សួស្តី, ពិភពលោក!" },
  { lang: "Lao", text: "ສະບາຍດີ, ໂລກ!" },
  { lang: "Sinhala", text: "ආයුබෝවන්, ලෝකය!" },
  { lang: "Nepali", text: "नमस्ते, संसार!" },
  { lang: "Bhutanese", text: "བཀྲ་ཤིས་བདེ་ལེགས། འཛམ་གླིང་།" },
  { lang: "Malay", text: "Helo, dunia!" },
  { lang: "Filipino", text: "Kumusta, mundo!" },
  { lang: "Swahili", text: "Hujambo, dunia!" },
  { lang: "Amharic", text: "ሰላም፣ ዓለም!" },
  { lang: "Yoruba", text: "Bawo, agbaye!" },
  { lang: "Igbo", text: "Ndewo, ụwa!" },
  { lang: "Hausa", text: "Sannu, duniya!" },
  { lang: "Zulu", text: "Sawubona, mhlaba!" },
  { lang: "Xhosa", text: "Molo, lizwe!" },
  { lang: "Afrikaans", text: "Hallo, wêreld!" },
];

export function HelloWorldAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startInterval = () => {
      interval = setInterval(() => {
        setIndex((prevIndex) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * helloWorlds.length);
          } while (newIndex === prevIndex && helloWorlds.length > 1);
          return newIndex;
        });
      }, 3000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startInterval();
      }
    };

    startInterval();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
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
