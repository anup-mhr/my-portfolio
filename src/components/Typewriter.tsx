import { useEffect, useState } from "react";

const TYPE_MS = 90;
const DELETE_MS = 40;
const PAUSE_MS = 1500;

export default function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const finishedTyping = !deleting && text === word;
    const delay = finishedTyping ? PAUSE_MS : deleting ? DELETE_MS : TYPE_MS;

    const id = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [words, wordIndex, text, deleting]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="animate-blink">|</span>
      </span>
    </>
  );
}
