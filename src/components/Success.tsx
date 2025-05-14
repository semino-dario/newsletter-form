import ButtonAction from "./ButtonAction";
import MainContainer from "./MainContainer";

interface SuccessProps {
  email: string;
}

const Success: React.FC<SuccessProps> = ({ email }) => {
  return (
    <MainContainer>
      <div>
        <img src="assets/images/icon-success.svg" alt="success icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <ButtonAction text={"Dismiss message"} />
      </div>
    </MainContainer>
  );
};

export default Success;
