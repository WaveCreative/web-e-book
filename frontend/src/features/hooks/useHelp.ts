import { useState } from "react";
import { sendHelp } from "../../lib/service/help.service";

export function useHelp() {
  const [loading, setLoading] = useState(false);

  const submit = async (message: string, image?: File | null) => {
    try {
      setLoading(true);

      const res = await sendHelp(message, image);

      return res;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submit,
  };
}