import { useRef } from "react";

const useCopyClipboard = (): [React.MutableRefObject<HTMLInputElement | null>, () => void] => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleCopy = () => {
    const input = ref.current;
    if (input) {
      const disabled = input.disabled;
      input.disabled = false;
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');
      input.selectionStart = 0;
      input.selectionEnd = 0;
      input.disabled = disabled;
    }
  }

  return [ref, handleCopy];
}

export default useCopyClipboard;