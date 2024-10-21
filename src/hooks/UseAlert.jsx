import { useCallback } from "react";

const useAlert = () => {
  const showAlert = useCallback(() => {
    alert("⚠️ 현재 준비 중입니다.");
  }, []);

  return showAlert;
};

export default useAlert;
