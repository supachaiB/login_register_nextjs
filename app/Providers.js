"use client";

import { SessionProvider, sessionProvider } from 'next-auth/react'

export const AuthProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
};