import hljs from "highlight.js";
import { createRef, useEffect } from "react";

const HighlightCore = ({ children, language }) => {
  const codeRef = createRef();

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <pre className={language}>
      <code ref={codeRef}>{children}</code>
    </pre>
  );
};

export default HighlightCore;
