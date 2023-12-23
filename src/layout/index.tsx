import React from 'react';
import Header from '../template/header';
import Footer from '../template/footer';

const index : React.FC<React.PropsWithChildren>= ({children}) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export default index;