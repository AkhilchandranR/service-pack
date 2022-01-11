import { Container } from '@mui/material';
import React from 'react';
import './Stats.css';
import StatComponent from './StatsComponent/StatComponent';

function Stats() {
    return (
        <Container>
            <div className="stats">
                <div className="stats__statComponent">
                     <StatComponent colour="#0070c0" amount="20" symbol="%" caption="Clickthrough Rate"/>
                </div>
                <div className="stats__statComponent">
                     <StatComponent colour="#ffcd3a" amount="60" symbol="+" caption="Downloads"/>
                </div>
                <div className="stats__statComponent">
                     <StatComponent colour="#32cd32" amount="20" symbol="+" caption="Active Users"/>
                </div>
                <div className="stats__statComponent">
                     <StatComponent colour="#ff0066" amount="60" symbol="+" caption="Downloads"/>
                </div>
            </div>
        </Container>
    )
}

export default Stats
