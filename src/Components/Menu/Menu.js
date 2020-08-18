import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        About Us
      </a>
      <a href="/book" tabIndex={tabIndex}>
        Book Event
      </a>
      <a href="/team" tabIndex={tabIndex}>
        Our Team
      </a>
      <a href="/contact" tabIndex={tabIndex}>
        Let's Chat
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
