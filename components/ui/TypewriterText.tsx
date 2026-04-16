"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  speed = 60,
  deleteSpeed = 35,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = texts[textIdx] ?? "";

    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(t);
    }

    if (isDeleting) {
      if (charIdx === 0) {
        setIsDeleting(false);
        setTextIdx((i) => (i + 1) % texts.length);
        return;
      }
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, deleteSpeed);
      return () => clearTimeout(t);
    }

    if (charIdx < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    setIsPaused(true);
  }, [
    charIdx,
    isDeleting,
    isPaused,
    textIdx,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink" aria-hidden="true" />
    </span>
  );
}
