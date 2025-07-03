import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Custom hook to trigger a key change when the element is in view
export default function useTypewriterInView(options = { amount: 0.7 }) {
  const ref = useRef(null);
  const inView = useInView(ref, options);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((k) => k + 1);
    }
  }, [inView]);

  return [ref, key];
}
