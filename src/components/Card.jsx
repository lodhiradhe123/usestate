import { useState } from "react";
import React  from "react";

function Card() {
  const [val, setVal] = React.useState({ name: "radhe", isBanned: true });

  return (
    <div className="p-10">
      <h1 className="capitalize font-bold">name:- {val.name}</h1>
      <h2 className="capitalize font-semibold">isBanned:- {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`py-2 px-4 ${
          val.isBanned ? "bg-blue-400" : "bg-red-500"
        } rounded-lg ml-4`}
      >
        Click
      </button>
    </div>
  );
}

export default Card;
