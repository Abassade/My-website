import React, { Component } from 'react'

export default class Knowus extends Component {

    state = {
        contact_name: '',
        contact_email: '',
        contact_message: ''
    }
    upButtonStyle = {
        "font-size":"48px",
        color:"black",
        "text-align":"center"
    }

  handleOnChange = (e)=>{
      this.setState({
          contact_name: this.refs.name.value,
          contact_email: this.refs.email.value,
          contact_message: this.refs.message.value
      });
  }

  onSubmitForm = (e)=>{
    e.preventDefault();
    if(this.state.contact_name !== '' &&
     this.state.contact_email !== '' &&
      this.state.contact_message !== ''){
          
        fetch('https://softnetsayhello.herokuapp.com/hello', {
                method: 'POST',
                headers : {'Content-Type':'application/json'},
                body:JSON.stringify({
                    name: this.state.contact_name,
                    email: this.state.contact_email,
                    message: this.state.contact_message
                })
            }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.code === 201){
                    alert('Your message is well recieved');
                }
                if(data.code === 400){
                    alert('Message not sent, ensure you fill out the form');
                }
            })
            .catch((err)=>{
                alert('Error: internal server error');
                console.log(err)
            })
          this.setState({
            contact_name: '',
            contact_email: '',
            contact_message: ''
          });
      }
      else{
        alert('Please fill out the form to leave us your message');
      }
        
  }

  sayHello = ()=>{
    return (
        <div className="row">
            <form className="col s12" onSubmit={this.onSubmitForm}>
                <div className="row">
                    <div className="name input-field col s12">
                        <input id="name" type="text" ref='name'
                        value={this.state.contact_name} className="validate" onChange={this.handleOnChange}/>
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className=" email input-field col s12">
                        <input id="email" type="email" ref='email'
                        value={this.state.contact_email} className="validate" onChange={this.handleOnChange}/>
                        <label htmlFor="email">Your email</label>
                        <span className="helper-text" data-error="not a mail" data-success="good"></span>
                    </div>
                    <div className="message input-field col s12">
                        <textarea id="textarea1" ref='message' value={this.state.contact_message} onChange={this.handleOnChange}
                        className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Your message</label>
                    </div>
                    <i className="send waves-effect waves-light btn blue darken-3" onClick={this.onSubmitForm}>send us</i>
                </div>
            </form>
        </div>
    );
}

  render() {
    return (
        <div className="knowus" id="knowus">
          <div style={this.upButtonStyle}>
            <a href="#header"> <i className="fa fa-chevron-circle-up"></i></a>
          </div>
            <div className="container">
            <div className="section">
        
            <div className="main row">
                <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>Know Us Better Today</h4>
                    <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                    <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
            </div>              
            <div className="divider grey"></div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col s12 m7">
                    <h5 className="hello">Say Hello</h5>
                    {this.sayHello()}
                </div>

                <div className="contact col s12 m5">
                </div>
            </div>
        
            </div>
      </div>
        </div>
    )
    
  }
}
