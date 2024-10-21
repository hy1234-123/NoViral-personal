import { useCallback } from "react";

const useAlert = () => {
  const showAlert = useCallback(() => {
    alert("⚠️ 해당 기능은 준비 중입니다.");
  }, []);

  return showAlert;
};

export default useAlert;
