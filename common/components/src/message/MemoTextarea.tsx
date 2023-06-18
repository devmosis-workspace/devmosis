import styled from "@emotion/styled";
import { ComponentPropsWithRef, forwardRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface MemoTextareaProps
  extends ComponentPropsWithRef<typeof TextareaAutosize> {}

export const MemoTextarea = forwardRef<HTMLTextAreaElement, MemoTextareaProps>(
  (props, ref) => <Textarea minRows={2} maxRows={5} ref={ref} {...props} />
);

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
`;
