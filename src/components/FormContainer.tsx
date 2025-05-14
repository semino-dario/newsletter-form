import { useScreenWidth } from "../hooks/useScreenWidth";
import MainContainer from "./MainContainer";
import SubscribeForm from "./SubscribeForm";

export default function FormContainer() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <MainContainer>
      <img
        src={`/assets/images/illustration-sign-up-${
          isMobile ? "mobile" : "desktop"
        }.svg`}
        alt="decorative ilustration"
      />

      <div className="text_container">
        <h1>Stay updated!</h1>
        <p className="excerpt">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li>
            <img src="/assets/images/icon-list.svg" alt="icon image" />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src="/assets/images/icon-list.svg" alt="icon image" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src="/assets/images/icon-list.svg" alt="icon image" />
            <p>And much more</p>
          </li>
        </ul>
        <SubscribeForm />
      </div>
    </MainContainer>
  );
}
