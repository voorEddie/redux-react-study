import {
  OPEN_MENU_TAB,
  CLOSE_MENU_TAB,
  ACTIVE_MENU_TAB
} from '../actions/actionTypes'

const initialState = {
  activedTabID: 'menu-home',
  tabIDs: ['menu-home']
}

const menuTabs = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU_TAB:
      return {
        activedTabID: action.id,
        tabIDs: getTabIDsAfterOpen(action.id, state.tabIDs)
      }
    case CLOSE_MENU_TAB:
      return {
        activedTabID: getActiveTabIDAfterClose(action.id, state),
        tabIDs: state.tabIDs.filter(tabID => tabID !== action.id)
      }
    case ACTIVE_MENU_TAB:
      return {
        activedTabID: action.id,
        tabIDs: state.tabIDs
      }
    default:
      return state
  }

  function getTabIDsAfterOpen(openID, tabs) {
    if (openID === initialState.activedTabID) {
      return tabs
    } else {
      return [
        initialState.activedTabID,
        action.id,
        ...tabs.filter(tabID => tabID !== initialState.activedTabID && tabID !== action.id)
      ]
    }
  }

  function getActiveTabIDAfterClose(closeID, tabState) {
    if (closeID !== tabState.activedTabID) {
      return tabState.activedTabID
    } else {
      let indexOfClosingTab = tabState.tabIDs.findIndex(tabID => tabID === closeID)
      return tabState.tabIDs[indexOfClosingTab - 1]
    }
  }
}

export default menuTabs
