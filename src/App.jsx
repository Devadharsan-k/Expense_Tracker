// eslint-disable-all-line no-undef
import { useEffect, useState } from "react";
import AddingTrans from "./Components/AddingTrans";
import Transactions from "./Components/Transactions";

function App() {
  const [toggleTrans, setToggleTrans] = useState(false);
  const [transactionData, setTransactionData] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;

    transactionData.forEach((item) => {
      item.type === "EXPENSE"
        ? (exp += parseFloat(item.amount))
        : (inc += parseFloat(item.amount));
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateBalance();
    localStorage.setItem("list", JSON.stringify(transactionData));
  }, [transactionData]);

  const addTransaction = (amount, description, type) => {
    setTransactionData([
      ...transactionData,
      { id: Date.now(), amount: amount, description: description, type: type },
    ]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactionData = transactionData.filter(
      (transaction) => transaction.id !== id
    );
    setTransactionData(updatedTransactionData);
  };

  useEffect(() => calculateBalance(), [expense, income]);
  return (
    <>
      <div className="flex flex-col items-center h-screen mt-7 md:mt-10 w-[90vw] md:w-[60vw] xl:w-[38vw] p-4 mx-auto space-y-8 ">
        <p className="text-2xl lg:text-3xl  whitespace-nowrap tracking-widest font-['Merriweather'] font-extrabold  md:tracking-[12px]">
          Expense Tracker
        </p>
        <div className="flex justify-around w-full items-center md:text-xl">
          <p className="test-lg md:text-2xl font-medium">
            Balance : $ {income - expense}
          </p>
          <button
            className="px-5 py-1 bg-black text-white"
            onClick={() => setToggleTrans(!toggleTrans)}
          >
            {toggleTrans ? "CANCEL" : "ADD"}
          </button>
        </div>
        <AddingTrans
          toggleTrans={toggleTrans}
          setToggleTrans={setToggleTrans}
          addTransaction={addTransaction}
        />
        <div className="flex w-full justify-evenly gap-3">
          <div className="flex flex-col py-3 px-7 border border-slate-300 rounded-lg gap-1 whitespace-nowrap">
            <p className=" text-[#7D7C7C]">Expense</p>
            <p className="text-2xl text-[#E21818] font-semibold">
              $ {expense.toFixed(2)}
            </p>
          </div>
          <div>
            <div className="flex flex-col py-3 px-7 border border-slate-300 rounded-lg gap-1 whitespace-nowrap">
              <p className="text-[#7D7C7C]">Income</p>
              <p className="text-2xl text-[#609966] font-semibold">
                $ {income.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <Transactions
          transactionData={transactionData}
          onDeleteTransaction={deleteTransaction}
        />
      </div>
    </>
  );
}

export default App;
