import { useState, useEffect } from "react";

interface TypingAnimationOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  startDelay?: number;
}

export default function useTypingAnimation(
  texts: string[], 
  options: TypingAnimationOptions = {}
) {
  const { speed = 100, delay = 2000, loop = true, startDelay = 0 } = options;
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (startDelay > 0 && !isStarted) {
      const startTimer = setTimeout(() => {
        setIsStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimer);
    }
    
    if (startDelay === 0 && !isStarted) {
      setIsStarted(true);
    }
  }, [startDelay, isStarted]);

  useEffect(() => {
    if (!isStarted || texts.length === 0) return;
    
    const currentText = texts[currentTextIndex] || "";

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          if (loop && texts.length > 1) {
            setTimeout(() => setIsDeleting(true), delay);
          }
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
  }, [currentTextIndex, currentCharIndex, isDeleting, isStarted]);

  return text;
}

// Enhanced typing effect component
export function TypingText({ 
  texts, 
  className = "", 
  options = {},
  cursor = true 
}: {
  texts: string[];
  className?: string;
  options?: TypingAnimationOptions;
  cursor?: boolean;
}) {
  const typedText = useTypingAnimation(texts, options);
  
  return (
    <span className={`${className} ${cursor ? 'typing-cursor' : ''}`}>
      {typedText}
      {cursor && <span className="animate-pulse text-electric">|</span>}
    </span>
  );
}
