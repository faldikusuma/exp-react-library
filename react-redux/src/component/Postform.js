import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createpost} from '../actions/postActions'

class Postform extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            title :"",
            body  :""
        }
        this.onchange =this.onchange.bind(this)
        this.onPost =this.onPost.bind(this)
    }
    onchange = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }
    onPost = (e) =>{
        e.preventDefault()
        const post ={
            title: this.state.title,
            body:this.state.body
        }
        this.props.createpost(post);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onPost}>
                    <div>
                        <label>Title </label>
                        <input 
                        type="text" 
                        name="title"
                        value={this.state.title} 
                        onChange={this.onchange} />    
                    </div>   
                    <br/>
                    <div>
                        <label>Body </label>
                        <textarea 
                      
                        name="body" 
                        value={this.state.body} 
                        onChange={this.onchange} />    
                    </div>
                    <br/> 
                    <button> Post</button>
                </form>            
            </div>
        )
    }
}
Postform.propTypes = {
    createpost: PropTypes.func.isRequired
  };
  
export default connect(null,{createpost})(Postform)