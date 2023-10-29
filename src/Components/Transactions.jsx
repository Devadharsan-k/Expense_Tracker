// In the Transactions.js component

import React from "react";

const Transactions = ({ transactionData, onDeleteTransaction }) => {
  return (
    <div className="flex text-center flex-col gap-3 w-9/12">
      <p className="text-lg md:text-2xl tracking-widest text-[#7D7C7C]">
        TRANSACTIONS
      </p>
      <input
        type="text"
        placeholder="Search"
        className="outline-none p-2 border rounded-sm mt-3"
      />
      {transactionData.length > 0 ? (
        transactionData.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between p-2 mt-2 border border-slate-400 ${
              item.type === "EXPENSE"
                ? "border-r-4 border-r-red-500"
                : "border-r-4 border-r-[#609966]"
            }`}
          >
            <p>{item.description}</p>
            <div className="flex items-center justify-center space-x-4">
              <p>$ {item.amount}</p>
              <button onClick={() => onDeleteTransaction(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <img src="/Capture.PNG" className="p-5 pt-3" alt="" srcSet="" />
        </div>
      )}
    </div>
  );
};

export default Transactions;
