const PlusButton = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      +
    </button>
  );
};

export default PlusButton;
