import React from 'react';
import Head from 'next/head';
import Resources from '../../components/Resources/resources';


const ResourcesPage = () => {
    return (
        <div>
            <Head>
                <title>Ghines Foundation - Resources</title>
                <meta name="description" content="Resources and reports from the Ghines Foundation." />
            </Head>
            <Resources />
        </div>
    );
};

export default ResourcesPage;