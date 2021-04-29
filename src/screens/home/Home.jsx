import React, { Component } from 'react';
import Header from '../../common/Header';
import moviesData from '../../common/moviesData';
import './Home.css';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStylesUpcoming = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
}));

const useStylesReleased = makeStyles((theme) => ({
    gridList: {
        width: '100%',
        height: '105%',
    },
    gridListTile: {
        margin: '35px 0 0 35px',
    },
}));

export default function Home() {
    const classesUpcoming = useStylesUpcoming();
    const classesReleased = useStylesReleased();
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="heading">
                <span >Upcoming Movies</span>
            </div>
            <div className={classesUpcoming.root}>
                <GridList className={classesUpcoming.gridList} cols={5} cellHeight={250}>
                    {moviesData.map((tile) => (
                        <GridListTile key={tile.id}>
                            <img src={tile.poster_url} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <div className="flex-container">
                <div className="left">
                    <GridList cellHeight={450} className={classesReleased.gridList} cols={4}>
                        {moviesData.map((tile) => (
                            <GridListTile key={tile.id} className={classesReleased.gridListTile}>
                                <img src={tile.poster_url} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>Release Date: {tile.release_date}</span>}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="right">
                </div>
            </div>
        </>
    );
}
