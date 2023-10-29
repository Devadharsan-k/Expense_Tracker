/* eslint-disable react/prop-types */

import { useState } from "react";

const AddingTrans = ({ toggleTrans, setToggleTrans, addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(amount, description, type);
    setAmount("");
    setDescription("");
    setToggleTrans(false);
  };
  return (
    <>
      {toggleTrans && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border border-slate-300 w-full gap-3 px-4 py-4 rounded-lg shadow-md md:w-[30vw]"
        >
          <input
            type="number"
            placeholder="Amount"
            className="outline-none p-2 border"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="outline-none p-2 border"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex space-x-4 tracking-wide md:text-xl">
            <input
              type="radio"
              name="type"
              value="EXPENSE"
              checked={type === "EXPENSE"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="">EXPENSE</label>
            <input
              type="radio"
              name="type"
              value="INCOME"
              checked={type === "INCOME"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="">INCOME</label>
          </div>
          <button
            type="submit"
            className="flex place-items-center mx-auto w-fit px-5 py-1 bg-black text-white mt-1"
          >
            ADD TRANSACTION
          </button>
        </form>
      )}
    </>
  );
};

export default AddingTrans;
