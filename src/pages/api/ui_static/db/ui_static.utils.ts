import { AccountManagerGeneralConfig } from "@/core/forms/login-module/utils/account.manager.interface";

export interface ImgConfig {
  src: string;
  alt: string;
  fill?: boolean;
  width: number;
  height: number;
  a?: string;
}

export interface UiConfig {
    account_mannager: AccountManagerGeneralConfig;
}
