import React from 'react';
// import Post from './Post';
import axios from 'axios';
import {
    Route,
    Link,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

class App extends React.Component {

    state = {
        posts: []
    };

    getPosts () {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res);
            this.setState({posts: res.data});
        })
    };

    componentDidMount() {
        this.getPosts()
    };
    

    render(){
        return (
            <div className='App'>
                <Router>
                    {this.state.posts.map(post => (
                        <Switch>
                            <p>{post.title}</p>
                        </Switch>
                    ))}
                </Router>
            </div>
        )
    }
}

export default App;
