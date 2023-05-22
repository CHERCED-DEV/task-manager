import { ImgConfig } from "@/pages/api/ui_static/db/ui_static.utils";
import { UseFormReturn } from "react-hook-form";

// props handlers
export interface SignUpDataProps {
  sign_up: AccountManagerConfig;
}
export interface LoginDataProps {
  Login: AccountManagerConfig;
}
export interface AccountManagerConfig {
  title: string;
  fields: ClientFlieldsConfig[];
  button: string;
  providers?: ImgConfig[]; 
}
// formsLogic
export type FormValues = { [key: string]: unknown };
export interface ClientFlieldsConfig {
  value: string;
  required: boolean;
  type: any;
}
export interface CustomInputForm {
  field: ClientFlieldsConfig;
  register: UseFormReturn<any>["register"];
  type: any;
  defaultValue?: string;
}
