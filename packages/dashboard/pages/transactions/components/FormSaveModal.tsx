import { savedFormAtom } from "@/atoms/savedFormAtom";
import { Modal } from "@common/components";
import { TransactionBaseFormValues } from "@common/types";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { ComponentPropsWithoutRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface TxProcessModalProps extends ComponentPropsWithoutRef<typeof Modal> {
  methods: UseFormReturn<TransactionBaseFormValues, any>;
}

export const FormSaveModal = ({ methods, ...props }: TxProcessModalProps) => {
  const [formTitle, setFormTitle] = useState("");
  const [savedForm, setSavedForm] = useAtom(savedFormAtom);

  const isFormExist = savedForm?.[formTitle] !== undefined;

  const handleTitleInit = () => {
    setFormTitle("");
  };

  const handleFormSave = () => {
    if (formTitle === "") return;

    if (isFormExist) {
      return;
    }

    setSavedForm((prev) => {
      return {
        ...prev,
        [formTitle]: methods.getValues().transactions,
      };
    });

    handleTitleInit();
    props.onClose();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value);
  };

  return (
    <Modal {...props}>
      <span>Save Form</span>

      <input
        type="text"
        value={formTitle}
        maxLength={30}
        onChange={(e) => handleTitleChange(e)}
      />

      <Button type="button" disabled={isFormExist} onClick={handleFormSave}>
        <span>Save</span>
      </Button>
    </Modal>
  );
};

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  background-color: #4476ff;
  color: white;
`;
