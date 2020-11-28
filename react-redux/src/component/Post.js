import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchpost } from '../actions/postActions';
 class Post extends Component {
    
    componentWillReceiveProps(nextProps){
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
          }       
    }
    componentWillMount(){
        this.props.fetchpost();
    }
    render() {
         const postItem = this.props.posts.map(item=>(
             <div key={item.id}>
                 <h2>{item.title}</h2>
                 <p>{item.body}</p>
             </div>
         ))
        return (
            <div>
                <h2> Post Request</h2>
                {postItem}
            </div>
        )
    }
}
Post.propTypes = {
    fetchpost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };
  
  const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
  });
  
  export default connect(mapStateToProps, { fetchpost })(Post);