import React from 'react';
const navBar= ({totalCounters})=>{
    return ( 
        <React.Fragment> 
            <nav >
                <h1 className="scrhndl">
                    SCORE HANDLER
                </h1>
            </nav>
            <br/><br/><p>PARTICIPANTS:{" "}<b>{totalCounters}</b></p>
        </React.Fragment>
        );
}

 
export default navBar;