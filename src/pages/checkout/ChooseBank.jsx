import React, { useState } from "react";

const ChooseBank = () => {
  const [ChooseBank, setChooseBank] = useState("bank");

  return (
    <div className="mt-[22.5px]" >
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={ChooseBank === "bank"}
            onChange={() => setChooseBank("bank")}
            className="mt-1"
          />
          <div>
            <span className="font-medium text-black">Direct Bank Transfer</span>
            {ChooseBank === "bank" && (
              <p className="text-gray-500 text-sm mt-2">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            )}
          </div>
        </label>
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={ChooseBank === "cod"}
            onChange={() => setChooseBank("cod")}
            className="mt-1"
          />
          <div>
            <span className="font-medium text-black">Cash On Delivery</span>
            {ChooseBank === "cod" && (
              <p className="text-gray-500 text-sm mt-2">
                Pay with cash upon delivery.
              </p>
            )}
          </div>
        </label>
      </div>
         <p className="mt-6 text-sm text-gray-700">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy</span>.
        </p>
    </div>
  );
};

export default ChooseBank;
