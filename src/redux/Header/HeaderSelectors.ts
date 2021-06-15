import { AppState } from "../redux-store";

export const getIsVisible = (state: AppState) => state.header.isVisible;
export const getIconsHeader = (state: AppState) => state.header.iconsHeader;
export const getAvatar = (state: AppState) => state.header.authUserAvatar?.small;