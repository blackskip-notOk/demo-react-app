import { AppState } from "../redux-store";

export const getContacts = (state: AppState) => state.dialogs.contacts;

export const getDialogs = (state: AppState) => state.dialogs.dialogs;