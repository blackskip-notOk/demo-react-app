import { AppState } from "../redux-store";

export const getInitialized = (state: AppState) => state.app.initialized;