import React, { useReducer } from "react";
import Container from "../../components/layout/Container";
import BreadCrumb from "../../components/layout/BreadCrumb";
import Image from "../../components/layout/Image";
import sunglass from "../../assets/images/product-11.png";
import SelectBox from "../../components/layout/SelectBox";
import { FiMinus, FiPlus } from "react-icons/fi";
const size = [
  {
    label: "kjfsdfkje",
    value: "kjfsdfkje",
  },
  {
    label: "fdfsdfkje",
    value: "fdfsdfkje",
  },
];
const handleQuantity = (state, action) => {
  switch (action.payload) {
    case "increase": {
      return {
        count: state.count + 1,
      };
    }
    case "decrease": {
      return {
        count: state.count - 1,
      };
    }

    default:
      break;
  }
};
const Cart = () => {
  const [quantity, setQuantity] = useReducer(handleQuantity, { count: 1 });
  return (
    <Container>
      <BreadCrumb />
      <div className="overflow-x-auto">
        <table className="w-full border border-[#F0F0F0] text-left">
          <thead className="bg-[#F5F5F3]">
            <tr className="">
              <th className="px-5 py-7">Product</th>
              <th className="px-5 py-7">Price</th>
              <th className="px-5 py-7">Quantity</th>
              <th className="px-5 py-7">Total</th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr className="border-b border-[#F0F0F0] text-sm lg:text-base">
              <td className="flex flex-col items-center py-7 lg:flex-row lg:gap-7 lg:px-5">
                <span className="cursor-pointer text-2xl">&times;</span>
                <Image
                  imageSrc={sunglass}
                  className={"h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"}
                  alt="uploaded-product"
                />
                <span className="font-dm text-sm font-bold">Product Name</span>
              </td>
              <td className="px-5 py-7">$44.00</td>
              <td className="flex w-1/2 flex-col items-center justify-between border border-r-slate-400 px-4 py-1 lg:flex-row">
                {quantity.count === 1 ? (
                  <span className="cursor-pointer text-xl">
                    <FiMinus />
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-xl"
                    onClick={() => setQuantity({ payload: "decrease" })}
                  >
                    <FiMinus />
                  </span>
                )}
                <span>{quantity.count}</span>
                <span
                  className="cursor-pointer text-xl"
                  onClick={() => setQuantity({ payload: "increase" })}
                >
                  <FiPlus />
                </span>
              </td>

              <td className="px-5 py-7">${quantity.count * 44}.00</td>
            </tr>
            <tr className="">
              <td className="flex flex-col items-center gap-4 py-5 lg:flex-row">
                <SelectBox options={size} id={size} />
                <span className="font-dm text-sm font-bold">Apply coupon</span>
              </td>
              <td></td>
              <td></td>
              <td className="pr-4 text-right font-dm text-sm font-bold">
                Update cart
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Cart;
