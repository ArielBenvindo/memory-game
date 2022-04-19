import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/memory.loader.js",
  dataUrl: "build/memory.data",
  frameworkUrl: "build/memory.framework.js",
  codeUrl: "build/memory.wasm",
});

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(function () {
    unityContext.on("GameOver", function (score) {
      setIsGameOver(true);
      setScore(score);
    });
  }, []);

  return (
    <div style={{
      overflowX: "hidden"
    }}>
      {isGameOver === true && <p>{`Game Over! ${score} points`}</p>}
      <br/>
      <Unity 
        unityContext={unityContext}
        style={{
          width: "100%",
          border: "2px solid black",
          background: "grey",
        }} />
    </div>
  );
}
export default App;
