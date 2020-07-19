import React, {useState, useContext} from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Drawer from '../../components/Drawer';
import Image from '../../components/Image';
import {DrawerContext} from '../../contexts/DrawerContext';
import InnerWrapper, {NavLink, NavLinks, SpreadButton} from './drawerSection.style';
import heartImage from '../../assets/image/charity/heart-red.png';

const DrawerSection = () => {
  const [toggleState, setToggleState] = useState(false);
  const {state, dispatch} = useContext(DrawerContext);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: 'TOGGLE',
    });
    handleActiveClass();
  };

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        menuItems {
          path
          label
          offset
        }
      }
    }
  `);

  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          className={`drawer_btn ${toggleState ? 'active' : ''}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
            <li/>
          </ul>
          <i className="flaticon-plus-symbol "/>
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <NavLinks>
          {data.dataJson.menuItems.map((menu, index) => (
            <NavLink
              key={`menu_key${index}`}
              to={menu.path}
              offset={menu.offset}
              onClick={handleDrawerToggle}
              activeClassName="active"
            >
              {menu.label}
            </NavLink>
          ))}
        </NavLinks>

        <SpreadButton>
          <span className="text">SPREAD</span>
          <Image src={heartImage} alt="Charity Landing"/>
        </SpreadButton>
      </InnerWrapper>
    </Drawer>
  );
};

export default DrawerSection;
