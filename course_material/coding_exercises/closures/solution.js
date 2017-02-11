const addFactory = (x) => {
  return (y) => {
    return x + y;
  };
};

const add50 = addFactory(50);
const add30 = addFactory(30);
