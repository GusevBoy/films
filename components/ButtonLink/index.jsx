import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../../public/images/ico-arrow.svg'
import Link from 'next/link'
const propTypes = {
    leftImg: PropTypes.bool,
    href: PropTypes.string.isRequired,
};
const defaultProps = {
    leftImg: false,
};

const ButtonElement = styled.a`
  display: block;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: none;
  cursor: pointer;
  transform: rotateY(${props => (props.imageLeft ? '180deg' : '')});
`;

const ButtonLink = (props) => {
    const {
        leftImg,
        href
    } = props;

    return (
        <div>
            <Link href={href}>
                <ButtonElement
                    imageLeft={leftImg}
                    aria-label={href}
                />
            </Link>
        </div>
    );
};

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;
export default ButtonLink;
