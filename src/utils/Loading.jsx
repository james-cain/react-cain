import React from 'react';
import './Loading.css';

export default function LoadingComponent ({ error, pastDelay }) {
    if (error) {
        return <div>Error!</div>;
    } else if (pastDelay) {
        return (
            <div class="loader-inner ball-pulse">
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    } else {
        return null;
    }
}