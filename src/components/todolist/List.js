import {Component} from 'react';
import Trash from '../../foto/trash.png'

class List extends Component {

    constructor(props) {
      super(props);
    }

    render(){
      return(
          <div className={"list flex flex-wrap "+(this.props.completed ? 'finished' : 'not-yet')}>
            <span className="flex-0">{this.props.title}</span>
            <div className="flex-1 flex justify-end">
              {/* MEMAKAI FUNGSI handleClickTrash dan handleChangeCheckBox DARI TodoList Component */}
              <input onChange={()=>this.props.handleChangeCheckBox(this.props.id)} className="checkbox" 
              type="checkbox" defaultChecked={this.props.completed} />
              <img onClick={()=>this.props.handleClickTrash(this.props.id)} src={Trash} 
              className="trash" alt="trash-icon" />
            </div>
          </div>
  
      );
    }
}

export default List;