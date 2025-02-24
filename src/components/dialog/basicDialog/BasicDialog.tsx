import "./styles.scss";

const BasicDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dialogOverlay">
      <div className="dialogBox">{children}</div>
    </div>
  );
};

export default BasicDialog;
