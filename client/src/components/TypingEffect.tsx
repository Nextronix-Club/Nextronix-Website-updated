import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypingEffect({
  text,
  className = "",
  speed = 100,
  delay = 1000,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping && currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      } else if (currentIndex >= text.length) {
        setTimeout(() => {
          setIsTyping(false);
          setCurrentIndex(0);
          setDisplayText("");
          setTimeout(() => setIsTyping(true), 500);
        }, delay);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isTyping]);

  return (
    <span className={`${className} typing-cursor`}>
      {displayText}
    </span>
  );
}
