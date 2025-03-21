import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export function Counter({ onChange }) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onChange(newQuantity);
      return newQuantity;
    });
  }

  function decrease() {
    setQuantity((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        onChange(newQuantity);
        return newQuantity;
      }
      return prev;
    });
  }

  return (
    <div className="counter">
      <button onClick={decrease}>
        <Minus size={16} />
      </button>
      <span>{quantity}</span>
      <button onClick={increase}>
        <Plus size={16} />
      </button>
    </div>
  );
}
