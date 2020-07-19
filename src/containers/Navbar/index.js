import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from '../../common/components/Image';
import Container from '../../common/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from '../../common/assets/image/charity/logo.svg';
import heartImage from '../../common/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="DAY Logo" />
        </Link>
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#newsletter" offset={81}>
            Stay in Touch
          </AnchorLink>
          <Button>
            <span className="text">Start a Chapter</span>
            <Image src={heartImage} alt="Heart Image" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
