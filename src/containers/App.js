import React from 'react';
import Post from './Post';
import axios from 'axios';
import About from '../components/About';
import Title from '../components/Title';
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
                    <Link exact to="/"><strong>Home</strong></Link> |&nbsp;
                    <Link to="/about"><strong>About</strong></Link>
                    {this.state.posts.map(post => (
                        <>
                            <Switch key={post.id}>
                                <Route exact path="/">
                                    <Link to={`/${post.id}`}>
                                        <Title title={post.title} />
                                    </Link>
                                </Route>
                            </Switch>
                            <Route path={`/${post.id}`}>
                                <Post post={post}/>
                            </Route>
                        </>
                    ))}
                    <Route path={`/about`}>
                        <About />
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App;
