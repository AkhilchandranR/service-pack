import React from 'react';
import './StatComponent.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function StatComponent({colour,amount,symbol,caption}) {
    return (
        <div className="statComponent">
            <CloudDownloadIcon style={{color:colour}} className="statsComponent__cloud"/>
            <h1 style={{color:colour}}>{amount}<span style={{color:colour}}>{symbol}</span></h1>
            <p>{caption}</p>
        </div>
    )
}

export default StatComponent
