const styles = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  backgroundColor: "blue !important",
  margin: "1rem 0 1rem 0",
};

export const InputWrapper = ({ children }) => {
  return <div style={styles}>{children}</div>;
};
