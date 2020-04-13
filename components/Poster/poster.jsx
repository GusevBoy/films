import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

const Wrap = styled.div`
  width: 420px;
  margin: 0 auto;
  color: palevioletred;
`;

const Image = styled.img`
  width: 420px;
  height: 594px;
`;

const Poster = ({ title, description, image}) => {
    return (
        <Wrap>
            <Image
                alt={title}
                src={image}
                width='100%'
                height='100%'
            />
            <h2>{title}</h2>
            <p>{description}</p>
        </Wrap>

    );
};

Poster.propTypes = propTypes;
export default Poster;
