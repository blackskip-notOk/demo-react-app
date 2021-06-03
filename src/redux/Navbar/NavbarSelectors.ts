import { AppState } from './../redux-store'

export const getFriends = (state: AppState) => state.navbar.friends

export const getLinks = (state: AppState) => state.navbar.links