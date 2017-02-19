const budget = () => {
  let balance = 0;
  let changeBal = (val) => {
    return balance += val;
  }


  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;

  return { deposit20, withdraw20, check }
}

let wallet = budget();

wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());
