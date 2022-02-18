import React from 'react';
import styled from 'styled-components';

function Footer(props) {
    return (
        <StyledFooter>
          &copy; Copyright 2022 LindsayEllis Edgar Allan Poe photo from: https://www.nps.gov/people/edgarallanpoe.htm
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
position: absolute;
    width: 100%;
    color: #black;
    line-height: 40px;
    font-size: 0.7em;
    text-align: center;
    bottom:0;
`