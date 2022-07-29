module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/snoballs",
        destination: "http://localhost:5000/api/snoballs",
      },
      {
        source: "/categories",
        destination: "http://localhost:5000/api/categories",
      },
    ];
  };
  return {
    rewrites,
  };
};