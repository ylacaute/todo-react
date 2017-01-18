import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.checkItem = this.checkItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(event) {
    // delegating check changes to the someone else
    this.props.deleteItem(this.props.id, event);
  }

  checkItem(event) {
    // delegating check changes to the someone else
    this.props.checkItem(this.props.id, event);
  }

  getClassName() {
    let className = "toto-item";
    if (this.props.isDone == true) {
      className += " completed";
    }
    return className;
  }

  render() {
    return (
      <li className={this.getClassName()}>
        <input type="checkbox"
               checked={this.props.isDone}
               onChange={this.checkItem}/>
        <span>{this.props.text}</span>
        <input className="edit" type="text"
               defaultValue={this.props.text} />
        <button className="destroy"
                onClick={this.deleteItem} />
      </li>
    )
  }

}

TodoItem.propTypes = {
  checkItem : React.PropTypes.func.isRequired,
  deleteItem : React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
  isDone : React.PropTypes.bool.isRequired,
  text : React.PropTypes.string.isRequired
};

export default TodoItem;
