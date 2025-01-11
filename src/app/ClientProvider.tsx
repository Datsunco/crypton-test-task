// src/ClientProvider.tsx
"use client"; // Убедитесь, что это клиентский компонент

import { Provider } from "react-redux";
import store from "@/store/store"; // Убедитесь, что путь правильный
import React from "react";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
