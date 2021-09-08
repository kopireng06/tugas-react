import {Component} from 'react';
import Trash from '../../foto/trash.png'

class List extends Component {

    constructor(props) {
      super(props);
      this.state = {value: this.props.completed};
      this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    }
  
    handleChangeCheckBox () {
      this.setState({
        value:!this.state.value
      });
    }
  
    render(){
      return(
          <div className={"list flex flex-wrap "+(this.state.value ? 'finished' : 'not-yet')}>
            <span className="flex-0">{this.props.title}</span>
            <div className="flex-1 flex justify-end">
              <input onChange={()=>this.handleChangeCheckBox(this.props.id)} className="checkbox" 
              type="checkbox" defaultChecked={this.state.value} />
              <img onClick={()=>this.props.handleClickTrash(this.props.id)} src={Trash} 
              className="trash" alt="trash-icon" />
            </div>
          </div>
  
      );
    }
}

export default List;