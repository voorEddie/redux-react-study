import React, { PropTypes } from 'react'
import './Menu.css'

const Menu = ({ activeID, onMenuItemClick, menuItems }) => (
  <ul className="Menu">{ menuItems.map(menuItem => (
    <li
      key={ menuItem.id }
      onClick={ () => onMenuItemClick(menuItem.id) }
      className={ 'Menu-item' + (menuItem.id === activeID ? ' active': '') }>
      { menuItem.value }
    </li>)) }
  </ul>
)

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  activeID: PropTypes.string.isRequired,
  onMenuItemClick: PropTypes.func.isRequired
}

export default Menu
