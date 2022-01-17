import React from 'react'
import moment from 'moment'

//The form can manage it's own state locally. No need to pass it around using the store.
//The input is controlled. The value is set and static. Methods will change the value as the user types.
//The form's onSubmit will be defined by the props passed in from the parent component.  

class Form extends React.Component {
  constructor(props) {
    super(props);

//If there is data passed down on the props for name etc, use that as your initial state.

    this.state = {
      name: props.data ? props.data.name : '',
      mobile: props.data ? props.data.mobile : '',
      message: props.data ? props.data.message : '',
      timestamp: props.data ? moment(props.timestamp) : moment(),
      error: ''
    };
  }
  

    onSubmitHandler = (e) => {
        e.preventDefault()
        
        if (!this.state.name || !this.state.mobile) {
            this.setState(() => ({ error: 'Name and mobile are required.' }));
          }

        else {
          this.setState(() => ({ error: '' }))
          console.log('form submitted')
//Use the onSubmit handler provided by the props. Each parent that renders Form can pass in it's own onSubmit handler to use for that page.
          this.props.onSubmit({ 
            name: this.state.name,
            mobile: this.state.mobile,
            message: this.state.message,
            timestamp: moment().format('HH:mm D/M/YY')
           })
        }

    }

    onNameChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ name: note }))
      };

    onMobileChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ mobile: note }));
      };

    onMessageChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ message: note }));
      };

    render() {
        return (
            <form id="contact-form" onSubmit={this.onSubmitHandler}> 
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input type="text" placeholder="Name" autoFocus value={this.state.name} onChange={this.onNameChange} />
                <input type="text" placeholder="Mobile number" value={this.state.mobile} onChange={this.onMobileChange} />
                <textarea value={this.state.message} onChange={this.onMessageChange}/>
                <button className="button">Send</button>
             </form>
        )
    }

}

export default Form
    
