import "../App.scss";

interface ButtonActionProps {
  text: string;
}

const ButtonAction: React.FC<ButtonActionProps> = ({ text }) => {
  return (
    <button>
      <p>{text}</p>
    </button>
  );
};

export default ButtonAction;
