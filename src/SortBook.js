import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import apiURL from './myURL';

class SortBook extends Component {
  constructor() {
    super();
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByNameDesc = this.sortByNameDesc.bind(this);

    this.sortByAuthorAsc = this.sortByAuthorAsc.bind(this);
    this.sortByAuthorDesc = this.sortByAuthorDesc.bind(this);

    this.sortByIsbnAsc = this.sortByIsbnAsc.bind(this);
    this.sortByIsbnDesc = this.sortByIsbnDesc.bind(this);

      this.state = {
          bookdata:[],
      };
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
      axios.get(apiURL+'/book',
      {
        headers: { "Authorization": `Bearer ${token}` } 
      })
      .then(res => {
        let db_data=res.data;
        //console.log(db_data);
        let bookdata=[];
        //esimerkki kuinka tietokannan dataa voi manipuloida
        //tässä siis tietokanta taulun name kenttä saa uuden nimen bookname
        //spread operaattori (...) tarkoittaa että loput kentät tuodaan alkuperäisinä 
        db_data.map(element=>{
            bookdata.push({bookname:element.name,...element})
        })
          this.setState({ bookdata });
          console.log(bookdata);
      });
    }

    sortByNameAsc(){
      this.state.bookdata.sort( (left, right) => {
        if ( left.bookname < right.bookname )
          return -1;
        else if ( left.bookname > right.bookname )
          return 1;
        else
          return 0;
      });
      this.forceUpdate();
    }
    sortByNameDesc(){
        console.log("desc called");
      this.state.bookdata.sort( (right, left) => {
        if ( left.bookname < right.bookname )
          return -1;
        else if ( left.bookname > right.bookname )
          return 1;
        else
          return 0;
      });
      this.forceUpdate();
    }

    sortByAuthorAsc(){

      this.state.bookdata.sort( (left, right) => {
        if ( left.author < right.author )
          return -1;
        else if ( left.author > right.author )
          return 1;
        else
          return 0;
      });
      this.forceUpdate();
    }
    sortByAuthorDesc(){
      this.state.bookdata.sort( (right, left) => {
        if ( left.author < right.author )
          return -1;
        else if ( left.author > right.author )
          return 1;
        else
          return 0;
      });
      this.forceUpdate();
    }
    
    sortByIsbnAsc(){

        this.state.bookdata.sort( (left, right) => {
          if ( left.isbn < right.isbn )
            return -1;
          else if ( left.isbn > right.isbn )
            return 1;
          else
            return 0;
        });
        this.forceUpdate();
      }
      sortByIsbnDesc(){
        this.state.bookdata.sort( (right, left) => {
          if ( left.isbn < right.isbn )
            return -1;
          else if ( left.isbn > right.isbn )
            return 1;
          else
            return 0;
        });
        this.forceUpdate();
      }
   
  render() {
    return (
      <div>
        <div>
        <h1>Books</h1>
        <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                  <th>Name <button onClick={this.sortByNameAsc}>▼</button> <button onClick={this.sortByNameDesc}>▲</button></th>
                  <th>Author <button onClick={this.sortByAuthorAsc}>▼</button> <button onClick={this.sortByAuthorDesc}>▲</button></th>
                  <th>ISBN <button onClick={this.sortByIsbnAsc}>▼</button> <button onClick={this.sortByIsbnDesc}>▲</button></th>
                  </tr>
                </thead>
                <tbody>
                {this.state.bookdata.map(bookdata => (
                  <tr key={bookdata.id_book}>
                    <td>{bookdata.bookname}</td>
                    <td>{bookdata.author}</td>
                    <td>{bookdata.isbn}</td>
                  </tr>         
                  ))}
    
                </tbody>
              </table>
      
        </div>
      </div>
    );
  }
}

export default SortBook;