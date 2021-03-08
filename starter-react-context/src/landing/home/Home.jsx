import React from 'react';
import MainLayout from "../../common/layout/MainLayout";
// import ItemList from '../../item/ItemList';
// import { SecureButton } from '../../core/routing/PrivateRoute';

function Home() {
    
    return (
        <MainLayout
            HeaderBox={<span>This is the header box section</span>}>
            {/* <SecureButton />
            <ItemList /> */}
            <p>This is home page, welcome !!</p>
        </MainLayout>
    );
}

export default Home;