import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App=()=>{
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAge="Today at 8:45PM" 
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jam" 
                timeAge="Today at 3:05PM" 
                content="Good work"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAge="Today at 2:45PM" 
                content="Great"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alen" 
                timeAge="Yesterday at 1:15PM" 
                content="Like your post"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Tom" 
                timeAge="Yesterday at 12:45PM" 
                content="NFT is the future art!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));