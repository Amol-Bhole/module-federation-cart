let mockContext = {
  misc: {
    theme: "Light",
    fontSize: "9px",
  },
};

const getMockContext = () => {
  return mockContext;
};

export const setMockContext = (context) => {
  mockContext = { ...context };
};

export default getMockContext;
