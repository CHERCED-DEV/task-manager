import { ImgConfig } from "@/pages/api/ui_static/db/ui_static.utils";
import { AccountManagerConfig } from "./account-manager.helpers";

export interface AccountManagerDataProps {
    account_mannager: AccountManagerGeneralConfig;
}

export interface AccountManagerGeneralConfig {
    welcome: {
        img: ImgConfig;
        title: string;
        buttons: string[];
    }
    sign_up: AccountManagerConfig;
    login: AccountManagerConfig;
}