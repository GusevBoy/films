import React, { useEffect } from 'react';
import Router from 'next/router'
import { films } from '../data';

export default function Index() {
    const keysFilms = Object.keys(films);
    useEffect(() => {
        const {pathname} = Router;
        if(pathname == '/' ){
            Router.push(`/movie/${keysFilms[0]}`, )
        }
    });
    return (
        <div>
            {keysFilms.length <= 0 ? (
                <h2>Empty state</h2>
            ) : (
                <h2>Library with movies</h2>
            )}
        </div>
    );
}