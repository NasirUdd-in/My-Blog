import React from 'react';
import ArticleBody from '../components/ArticleBody/ArticleBody';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import Testimonials from '../components/Testimonials/Testimonials';

const article = () => {
    return (
        <div>
            <Navigation/>
            <ArticleBody/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default article;