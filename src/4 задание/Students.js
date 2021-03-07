import React from 'react';
import { Table } from 'antd';
import '../App.css';
let url = 'https://jsonplaceholder.typicode.com/users';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
];
class Students extends React.Component {
  constructor() {
    super();
    this.columns = [];
  }
  state = {
    todos: [],
  };
  componentDidMount = async () => {
    let todos = [];
    let keys = [];
    let temp = {};
    try {
      const result = await fetch(url);
      todos = await result.json();
      //todos= (await fetch(url)).json();   // Почему эти записи неравноценны?
    } catch (err) {}
    this.setState({
      todos,
    });
    ///////////////////////////////////// динамическое выделение столбцов,
    keys = Object.keys(todos[0]); // но оно странно работает
    keys.map((key) => {           // если перед columns поставить this, то таблица появляется только после нажатия f12 в браузуре
      if (typeof todos[0][key] != 'object') {
        temp = {
          title: key,
          dataIndex: key,
          key: key,
        };
        this.columns.push(temp);
      }
    });
    ////////////////////////////////////
  };
  switch = (value) => {
    this.props.switchId(value);
  };
  render() {
    return (
      <div className='students'>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                this.switch(record.id);
              }, // click row
              onDoubleClick: (event) => {}, // double click row
              onContextMenu: (event) => {}, // right button click row
              onMouseEnter: (event) => {}, // mouse enter row
              onMouseLeave: (event) => {}, // mouse leave row
            };
          }}
          dataSource={this.state.todos}
          columns={columns}
        />
        ;
      </div>
    );
  }
}
export default Students;
