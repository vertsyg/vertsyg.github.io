type ButtonProps = {
  type: "submit";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => (
  <button type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
