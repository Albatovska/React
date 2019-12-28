
import React from 'react';
import "./app.css";
import Header from '../header/header';
import Search from '../search/search';
import List from '../list/list';
import Footer from '../footer/footer';
import Filter from "../filter/filter";
import CurrentDate from "../currentDate/currentDate";

const data = [
  {title: "drink coffee", important: false, done: false, id: 1},
  {title: "go to bed", important: false, done: false, id: 2},
  {title: "eat pizza", important: false, done: false, id: 3},
  {title: "go for a walk", important: false, done: false, id: 4},
];

class App extends React.Component {

  state = {
    list: data,
    filter: false,
    date: '',
  };

  add = (value) => {
    if(value === "") return;
    const addId = Date.now().toString(8).substr(2, 4);
    this.setState({
      list: [
        ...this.state.list,
        {title:value, important: false, done: false, id: addId}
      ]
    })
  };

  changeStatus = (id, name) => {
    const { list=[] } = this.state;
    list.some((el) => {
      if(el.id === id) el[name] = !el[name];
    });
    this.setState({list})
  };

  remove = (id) => {
    const {list} = this.state;
    const index = list.findIndex(el => el.id === id);
    const newArr = [
        ...list.slice(0, index),
        ...list.slice(index+1, list.length)
    ];
    this.setState({list: newArr})
  };

  filterFunc = (type) => {
    let filter = false;
    if(type !== "all") filter = type;
    this.setState({filter})
  };

  useFilter = (list, filter) => {
    if(!filter) return list;
    const newArr = list.filter(el => {
      return el[filter]
    });
    return newArr
  };
  
  searchFunc = (e) => {
      const {value} = e.target
      this.setState({search: value})
  }

  useSerch = (list, search) => {
      if(!search) return list;
      const searchArr = list.filter(el => {
         return el.title.indexOf(search) !== -1
      })
      return searchArr
  }
   
  useSort = (list) => {

    let sortList = [...list]

      return sortList
        .sort((prev, next) => (prev.important === next.important) ? 0 : prev.important? -1 : 1)
        .sort((prev, next) => (prev.done === next.done) ? 0 : prev.done? 1: -1);
  }

  render(){

    const { list, filter, search } = this.state;
    const newCount = list.length;
    const sortingList = this.useSort(list)
    const newList = this.useFilter(sortingList, filter);
    const searchList = this.useSerch(newList, search);

    return(
      <div className={`wrap`}>
        <div className={"main-container"}>
          <Header count = {newCount}/>
          <Search searchFunc = {this.searchFunc}/>
          <Filter  
          filterFunc = {this.filterFunc} 
          filter={filter}/>
          <List
              data={searchList}
              changeStatus={this.changeStatus}
              remove = {this.remove}/>
          <Footer add={this.add}/>
          <CurrentDate />
        </div>
      </div>
    )
  }
}

export default App


