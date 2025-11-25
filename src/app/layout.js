"use client";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import "./globals.css";
import { darkTheme, lightTheme } from "@/utils/theme";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

export default function RootLayout({ children }) {
  const [darkMode] = useState(true);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Navbar />
          <Body>{children}</Body>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
