const Option = ({
  op,
  correct,
  handleans,
  index,
  setScore,
  coorectindex,
  showright,
}) => {
  const applyclick = () => {
    handleans();
    if (index == coorectindex) {
      setScore((previos) => previos + 1);
    }
  };

  return (
    <div data-testid="option">
      {showright ? (
        <button className={correct ? "bgGreen" : "bgRed"} disabled={true}>
          {op}
        </button>
      ) : (
        <button onClick={applyclick}>{op}</button>
      )}
    </div>
  );
};

export default Option;