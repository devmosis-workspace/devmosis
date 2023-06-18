import { savedFormAtom } from "@/atoms/savedFormAtom";
import { Modal } from "@common/components";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { ComponentPropsWithoutRef } from "react";

interface TxProcessModalProps extends ComponentPropsWithoutRef<typeof Modal> {
  keyToDelete: string | null;
}

export const FormDeleteModal = ({
  keyToDelete,
  ...props
}: TxProcessModalProps) => {
  const [savedForm, setSavedForm] = useAtom(savedFormAtom);

  const isFormExist =
    keyToDelete !== null && savedForm?.[keyToDelete] !== undefined;

  const handleFormDelete = () => {
    if (!isFormExist) return;
    setSavedForm((prev) => {
      if (prev === null) return prev;
      const { [keyToDelete]: _, ...rest } = prev;
      return rest;
    });
    props.onClose();
  };

  return (
    <Modal {...props}>
      <span>Delete Form</span>

      <Button type="button" disabled={!isFormExist} onClick={handleFormDelete}>
        <span>Delete</span>
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
