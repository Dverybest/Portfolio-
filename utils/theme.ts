import { css } from "styled-components";

const colors = {
  primary: "#A53DFF",
  primary05: "rgba(237, 216, 255, 0.5)",
  grey: "#ABB2BF",
  grey50: "#F0F1F3",
  grey100: "#E6E8EB",
  grey400: "#87909D",
  grey500: "#697484",
  grey600: "#556070",
  grey700: "#424E60",
  grey900: "#132238",
  black: "#333333",
  background: "#282C33",
  white: "#FFFFFF",
} as const;
export const typography = {
  display: css`
    font-family: Work Sans;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 84px;
    @media (max-width: 800px) {
      font-size: 42px;
      line-height: 46px;
    }
  `,
  header1: css`
    font-family: Work Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    @media (max-width: 500px) {
      font-size: 24px;
      line-height: 28px;
    }
  `,
  header3: css`
    font-family: Work Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    @media (max-width: 500px) {
      font-size: 20px;
      line-height: 24px;
    }
  `,
  header5: css`
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  `,
  bodyLarge: css`
    font-family: Work Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    @media (max-width: 500px) {
      font-size: 13px;
      line-height: 16px;
    }
  `,
  bodyLarge500: css`
    font-family: Work Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    @media (max-width: 500px) {
      font-size: 13px;
      line-height: 16px;
    }
  `,
  bodyLarge600: css`
    font-family: Work Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    @media (max-width: 500px) {
      font-size: 13px;
      line-height: 16px;
    }
  `,
  bodyRegular400: css`
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    @media (max-width: 500px) {
      font-size: 12px;
      line-height: 16px;
    }
  `,
  bodyRegular: css`
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  `,
  bodyRegular600: css`
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  `,
  bodySmall400: css`
    font-family: Work Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  `,
  bodyThin500: css`
    font-family: Work Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  `,
} as const;
export const theme = {
  colors,
} as const;
