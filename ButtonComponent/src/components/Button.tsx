interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
