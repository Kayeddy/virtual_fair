import React, { useEffect } from "react";

const ProductsCatalog = () => {
  useEffect(() => {
    console.log("component Mounted");
  }, []);

  return (
    <div className="absolute top-[40%] left-[40%] z-20 h-[300px] w-[300px]">
      <div className="bg-white rounded-md flex flex-col items-center justify-center gap-10 h-full w-full">
        <h1>Productos disponibles</h1>
        <div className="flex flex-col items-center justify-centerborder border-slate-500 gap-4">
          <p>Peoducto</p>
          <p>Peoducto</p>
          <p>Peoducto</p>
          <p>Peoducto</p>
          <p>Peoducto</p>
          <p>Peoducto</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalog;
