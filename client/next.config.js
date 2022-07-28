module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/snoballs",
        destination: "http://localhost:5000/api/snoballs",
      },
    ];
  };
  return {
    rewrites,
  };
};