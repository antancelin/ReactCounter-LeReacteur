const ResetButton = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter - counter);
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
