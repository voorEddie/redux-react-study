import React, { PropTypes } from 'react'
import './Tabs.css'
import Home from './Home'
import FeatureA from './FeatureA'
import FeatureB from './FeatureB'
import FeatureC from './FeatureC'
import FeatureD from './FeatureD'

const Tabs = ({ tabIDs, activedTabID, onTabClick, onTabCloseClick, idValueMap }) => (
  <div className="Tabs">
    <ul className="Tabs-labels">{ tabIDs.map(tabID => (
      <li
        key={ tabID }
        onClick={ () => onTabClick(tabID) }
        className={ 'Tabs-label ' + (tabID === activedTabID ? ' active': '') }>
        { idValueMap.find(tab => tab.id === tabID).value }
        { tabID !== tabIDs[0] &&
        <i
          className="fa fa-window-close"
          onClick={ (e) => {
            e.stopPropagation()
            return onTabCloseClick(tabID)
          } } />
        }
      </li>)) }
    </ul>
    <div className="Tabs-contents">{ tabIDs.map(tabID => (
      <div
        key={ tabID }
        className={ 'Tabs-content' + (tabID === activedTabID ? ' active' : '') }>
        { idMapToFeature(tabID) }
      </div>)) }
    </div>
  </div>
)

function idMapToFeature(tabID) {
  switch (tabID) {
    case 'menu-home':
      return <Home />
    case 'menu-a':
      return <FeatureA />
    case 'menu-b':
      return <FeatureB />
    case 'menu-c':
      return <FeatureC />
    case 'menu-d':
      return <FeatureD />
    default:
      return null
  }
}

Tabs.propTypes = {
  tabIDs: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  activedTabID: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onTabCloseClick: PropTypes.func.isRequired
}

export default Tabs
