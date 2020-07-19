import React from 'react';
import { Link } from 'gatsby';
import Image from '../../components/Image';
import Container from '../../components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from '../../assets/image/charity/logo.jpg';
import heartImage from '../../assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="DAY Logo" />
        </Link>
        <MenuWrapper>
          <a href="#">
            Contact Us
          </a>
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
