const WithCondition = ({ when, then, or }) => {
  if (when) return then;

  return or;
};

export default WithCondition;
