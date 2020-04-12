import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ButtonLink from '../../components/ButtonLink';
import Poster from '../../components/Poster/poster';
import {films} from "../../data";
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: papayawhip;
`;

const PosterWrap = styled.div`
  position: relative;
  width: 580px;
`;

const ButtonLeft = styled.div`
  display: flex;
  align-items: center;
  height: 594px;
  position: absolute;
  left: 0;
`;

const ButtonRight = styled(ButtonLeft)`
  left: auto;
  right: 0;
`;


const PosterPage = ({}) => {
    const { query: { url } } = useRouter();
    console.log(url);
    console.log(films[url]);
    const keysFilms = Object.keys(films);
    const index = keysFilms.indexOf(url);
    return (
        <Wrap>

            {keysFilms.length <= 0 ? (
                <h2>Empty state</h2>
            ) : (
                <div>
                    {!films[url] && (
                        <h2>
                            Page not found
                        </h2>
                    )}
                    {films[url] && (
                        <PosterWrap>
                            <ButtonLeft>
                                {index - 1 >= 0 && (
                                    <ButtonLink href={`/movie/${keysFilms[index - 1]}`} leftImg/>
                                )}
                            </ButtonLeft>
                            <ButtonRight>
                                {index + 1 <= keysFilms.length - 1 && (
                                    <ButtonLink href={`/movie/${keysFilms[index + 1]}`} />
                                )}
                            </ButtonRight>
                            <Poster
                                image={films[url] && films[url].image}
                                title={films[url] && films[url].title}
                                description={films[url] && films[url].description}
                            />
                        </PosterWrap>
                    )}
                </div>
            )}
        </Wrap>
    );
};

export default PosterPage;
