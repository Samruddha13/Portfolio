import { useState, useEffect } from "react";

export default function useTypingAnimation(texts: string[], speed = 100, delay = 2000) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (currentCharIndex > 0) {
          setText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, isDeleting, texts, speed, delay]);

  return text;
}
