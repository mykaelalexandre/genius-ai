"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0f811fad-8c54-48f2-9a34-b33673f8dbc6");
  }, []);

  return null;
};
