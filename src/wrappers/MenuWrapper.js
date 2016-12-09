import { connect } from 'react-redux'
import { openMenuTab } from '../actions'
import Menu from '../components/Menu'

const mapStateToProps = (state) => {
  return {
    activeID: state.menuTabs.activedTabID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuItemClick: (id) => {
      dispatch(openMenuTab(id))
    }
  }
}

const MenuWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MenuWrapper
