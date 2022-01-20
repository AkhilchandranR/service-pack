import React from 'react';
import './BreadCrumbs.css';

function BreadCrumbs({links}) {
    return (
        <div className='breadCrumbs'>
            {links.map((link)=>(
                <>
                <p>{link.name}</p>
                <span> > </span>
                </>
            ))}
        </div>
    )
}

export default BreadCrumbs
