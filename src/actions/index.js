import {
  OPEN_MENU_TAB,
  CLOSE_MENU_TAB,
  ACTIVE_MENU_TAB
} from './actionTypes'

export function openMenuTab(id) {
  return { type: OPEN_MENU_TAB, id }
}

export function closeMenuTab(id) {
  return { type: CLOSE_MENU_TAB, id }
}

export function activeMenuTab(id) {
  return { type: ACTIVE_MENU_TAB, id }
}
