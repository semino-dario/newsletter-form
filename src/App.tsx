import "./App.scss";
import FormContainer from "./components/FormContainer";
import { useScreenWidth } from "./hooks/useScreenWidth";

function App() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <div className="home_container">
      <FormContainer />
      {/* <img src={`/${isMobile ? "mobile" : "desktop"}-design.jpg`} alt="" /> */}
    </div>
  );
}

export default App;
