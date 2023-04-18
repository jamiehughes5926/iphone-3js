import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import { useRef } from "react";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection trigerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
