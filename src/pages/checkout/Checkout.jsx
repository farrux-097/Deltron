import React, { useState } from 'react';
import { useCart } from '../../zustand/useCart';
import toast,{Toaster} from "react-hot-toast";
import { chekOut } from "../../pages/contact/Telegram";
import ChooseBank from '../checkout/ChooseBank';

const Checkout = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("Uzbekistan");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productList = cart.map(
      (item) => `${item.title} x ${item.quantity} = ${item.price * item.quantity} $`
    ).join("\n");

    const message = `
        <b>Yangi Buyurtma!</b>
        <b>Ismi:</b> ${firstName} ${lastName}
        <b>Kompaniya:</b> ${companyName || "Yo'q"}
        <b>Mamlakat:</b> ${country}
        <b>Manzil:</b> ${address}, ${city}, ${province}
        <b>ZIP:</b> ${zip}
        <b>Telefon:</b> ${phone}
        <b>Email:</b> ${email}
        <b>Izoh:</b> ${note || "Yo'q"}
        <b>Mahsulotlar:</b>${productList}
        <b>Umumiy:</b> ${total.toFixed(2)} $
    `;

    try {
      await chekOut(message);
      toast.success("Buyurtma muvaffaqiyatli yuborildi!");
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setCountry("Uzbekistan");
      setAddress("");
      setCity("");
      setProvince("");
      setZip("");
      setPhone("");
      setEmail("");
      setNote("");
    } catch (error) {
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <Toaster position='top-center'/>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className='font-semibold text-[28px] sm:text-[36px] text-[#000] mb-8'>Billing details</h2>

          <div className='flex flex-col sm:flex-row gap-[31px] mb-6'>
            <div className='flex flex-col gap-2 w-full'>
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input value={firstName} onChange={e => setFirstName(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] py-[15px] px-[20px]' />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input value={lastName} onChange={e => setLastName(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] py-[15px] px-[20px]' />
            </div>
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Company Name <span className="text-gray-400">(Optional)</span></label>
            <input value={companyName} onChange={e => setCompanyName(e.target.value)} className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Country / Region</label>
            <select value={country} onChange={e => setCountry(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]'>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Street address</label>
            <input value={address} onChange={e => setAddress(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Town / City</label>
            <input value={city} onChange={e => setCity(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Province</label>
            <select value={province} onChange={e => setProvince(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]'>
              <option value="" disabled>Choose Province</option>
              <option value="Andijon">Andijon</option>
              <option value="Buxoro">Buxoro</option>
              <option value="Farg'ona">Farg'ona</option>
              <option value="Jizzax">Jizzax</option>
              <option value="Qashqadaryo">Qashqadaryo</option>
              <option value="Xorazm">Xorazm</option>
              <option value="Namangan">Namangan</option>
              <option value="Navoiy">Navoiy</option>
              <option value="Samarqand">Samarqand</option>
              <option value="Sirdaryo">Sirdaryo</option>
              <option value="Surxondaryo">Surxondaryo</option>
              <option value="Toshkent">Toshkent</option>
            </select>
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">ZIP code</label>
            <input value={zip} onChange={e => setZip(e.target.value)} required className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} required type="tel" className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>

          <div className='mb-6'>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>

          <div className='mb-6'>
            <input value={note} onChange={e => setNote(e.target.value)} placeholder="Buyurtma haqida izoh (ixtiyoriy)" className='shadow-md border border-gray-400 rounded-[10px] w-full py-[15px] px-[20px]' />
          </div>
        </div>

        <div className="w-full lg:w-[480px] xl:w-[540px] 2xl:w-[608px]">
          <div className="flex justify-between text-black text-xl font-semibold mb-4">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-700 mb-2">
              <span>{item.title} x {item.quantity}</span>
              <span>Rs. {(item.price * item.quantity).toFixed(2)} $</span>
            </div>
          ))}

          <div className="flex justify-between text-black font-semibold mt-4 border-t pt-4">
            <span>Subtotal</span>
            <span>Rs. {total.toFixed(2)} $</span>
          </div>

          <div className="flex justify-between text-xl font-bold text-yellow-800 mt-2 mb-6">
            <span>Total</span>
            <span>Rs. {total.toFixed(2)} $</span>
          </div>

          <div className='mb-4'>
            <ChooseBank/>
          </div>

          <button type="submit" className='w-full border border-black rounded-[15px] py-[17px] font-semibold hover:bg-black hover:text-white transition duration-300'>
            Place order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
