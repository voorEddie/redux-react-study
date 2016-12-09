import { connect } from 'react-redux'
import { activeMenuTab, closeMenuTab } from '../actions'
import Tabs from '../components/Tabs'

const mapStateToProps = (state) => {
  return {
    activedTabID: state.menuTabs.activedTabID,
    tabIDs: state.menuTabs.tabIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (id) => {
      dispatch(activeMenuTab(id))
    },
    onTabCloseClick: (id) => {
      dispatch(closeMenuTab(id))
    }
  }
}

const TabsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)

export default TabsWrapper
