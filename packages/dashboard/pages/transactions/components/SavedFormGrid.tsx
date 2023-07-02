import { savedFormAtom } from "@/atoms/savedFormAtom";
import { PlayIcon } from "@/styles/icons";
import {
  TransactionBaseFormValue,
  TransactionBaseFormValues,
} from "@common/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormDeleteModal } from "./FormDeleteModal";

interface SavedFormGridProps {
  methods: UseFormReturn<TransactionBaseFormValues, any>;
}

export const SavedFormGrid = ({ methods }: SavedFormGridProps) => {
  const [keyToDelete, setKeyToDelete] = useState<string | null>(null);
  const savedForm = useAtomValue(savedFormAtom);
  const savedFormEntries = Object.entries(savedForm ?? {});

  const isSavedFormEmpty = savedFormEntries.length === 0;
  const isDeleteModalOpen = keyToDelete !== null;

  const handleSavedFormSelect = (form: TransactionBaseFormValue[]) => {
    const prevData = methods.getValues().transactions;
    const currentData = [...prevData, ...form];

    methods.setValue("transactions", currentData);
  };

  const handleDeleteModalOpen = (key: string) => {
    setKeyToDelete(key);
  };

  const handleDeleteModalClose = () => {
    setKeyToDelete(null);
  };

  return (
    <>
      {!isSavedFormEmpty ? (
        <Container>
          <Subtitle>My TXs</Subtitle>
          <Grid>
            {savedFormEntries.map(([key, value]) => {
              return (
                <Box key={key}>
                  <SavedFormButton
                    type="button"
                    onClick={() => handleSavedFormSelect(value)}
                  >
                    <span>{key}</span>
                    <div
                      css={css`
                        position: absolute;
                        bottom: 12px;
                        right: 12px;
                        z-index: 1;
                      `}
                    >
                      <PlayIcon />
                    </div>
                  </SavedFormButton>
                  <RemoveButton
                    type="button"
                    onClick={() => handleDeleteModalOpen(key)}
                  >
                    <span>Remove</span>
                  </RemoveButton>
                </Box>
              );
            })}
          </Grid>
        </Container>
      ) : null}
      <FormDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        keyToDelete={keyToDelete}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 24px;
  background: #242731;
  padding: 24px;
  margin-right: 16px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 18px;
    right: 18px;
    bottom: -40px;
    z-index: -2;
    background: #000;
    opacity: 0.51;
    filter: blur(86.985px);
    border-radius: 24px;
  }
`;

const Subtitle = styled.h3`
  margin-bottom: 12px;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
`;

const SavedFormButton = styled.button`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 12px;
  border-radius: 8px;
  background: #6a769f;
  color: white;
  position: relative;
`;

const RemoveButton = styled.button`
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 1;
`;
