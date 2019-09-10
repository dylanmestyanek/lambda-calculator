// Handles calculations depending on operator
export default calculations = (value) => {
    if (value === "=") {
      switch(operator) {
        case '+':
          setTotal((+oldTotal) + (+total));
          break;
        case '-':
          setTotal((+oldTotal) - (+total));
          break;
        case '*':
          setTotal((+oldTotal) * (+total));
          break;
        case '/':
          setTotal((+oldTotal) / (+total));
          break;
        }
        setOperator('');
        setOldTotal('');
    } else {
        setOldTotal(total);
        setTotal('');
        setOperator(value);
    }
};