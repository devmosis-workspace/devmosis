import { Typography } from "@/components/Typography";
import { useState, type InputHTMLAttributes, useEffect } from "react";

interface AddressPubKeyInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  addressData: {
    address: string | null;
    pubKey: string | null;
  };
  currentIndex: number;
  onAddressChange: (index: number, value: string | null) => void;
  onPubKeyChange: (index: number, value: string | null) => void;
}

export const AddressPubKeyInput = ({
  disabled,
  addressData,
  currentIndex,
  onAddressChange,
  onPubKeyChange,
  ...props
}: AddressPubKeyInputProps) => {
  const [inputMode, setInputMode] = useState<"address" | "pubKey">("address");

  const handleInputToggle = () => {
    setInputMode(inputMode === "address" ? "pubKey" : "address");
  };

  useEffect(() => {
    if(currentIndex === 0) return;
    if (inputMode === "address") {
      onPubKeyChange(currentIndex, null);
    } else {
      onAddressChange(currentIndex, null);
    }
  }, [inputMode, currentIndex]);

  return (
    <div className="flex flex-col items-end">
      <input
        type="text"
        disabled={disabled}
        placeholder={inputMode === "address" ? "Enter the address" : "Enter the pubkey"}
        value={
          inputMode === "address"
            ? addressData?.address ?? ""
            : addressData?.pubKey ?? ""
        }
        onChange={
          inputMode === "address"
            ? (e) => onAddressChange(currentIndex, e.target.value)
            : (e) => onPubKeyChange(currentIndex, e.target.value)
        }
        className="w-[430px] h-[40px] rounded border-[1px] border-[#E5E7EB] px-3 mr-2"
        {...props}
      />
      <button type="button" className="mr-2" onClick={handleInputToggle}>
        <Typography.SMText className="text-[#778CA2] mt-2 underline">
          {inputMode === "address" ? "Use pubkey" : "Use address"}
        </Typography.SMText>
      </button>
    </div>
  );
};
