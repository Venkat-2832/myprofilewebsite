import React, { useEffect, useState } from "react";

const TypeWriter = ({ text, speed = 100, onComplete, showCursor = true }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) {
      onComplete && onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed, onComplete]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="cursor">|</span>}
    </span>
  );
};

export default TypeWriter;
