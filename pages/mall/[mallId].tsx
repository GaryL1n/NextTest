import React from 'react';
import { useRouter } from 'next/router';

const MallId = () => {
    const router = useRouter();
    const { mallId } = router.query;

    return (
        <>
            <h1>mallId : {mallId}</h1>
        </>
    );
};

export default MallId;
