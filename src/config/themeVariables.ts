import { OverrideToken, AliasToken } from "antd/es/theme/interface";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
export const globalTokens: Partial<AliasToken> = {
  lineWidthFocus: 0,
  controlOutlineWidth: 1,
  borderRadius: 2,
  fontFamily: inter.style.fontFamily,
};

export const componentTokens: OverrideToken = {
  Button: {
    colorPrimaryBg: 'var(--primary-50)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-200)',
    colorPrimaryBorderHover: 'var(--black)',
    colorPrimaryHover: 'var(--primary-400)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryActive: 'var(--primary-600)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    borderRadius: 20,
    borderRadiusLG: 20,
    borderRadiusSM: 20,
    defaultShadow: 'none',
    primaryShadow: 'none'
  },
};
