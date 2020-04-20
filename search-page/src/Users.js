import React from 'react';
import axios from 'axios';
import postdata from './data.json';
import './App.css';



function searchFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}
export default class Users extends React.Component {
  constructor(props){
     super(props);
     this.state={
       postdata : postdata,
       term : '',
     }
     this.searchHandler = this.searchHandler.bind(this);
   }
   searchHandler(event){
     this.setState({term: event.target.value})
   }




  render() {
  const {term , postdata} = this.state;

      return (

        <div style = {{margin : ' 0 auto' , width : '70%'}}>
       <div style={{margin: '5px' }}>
       <h1>Quze Courses Table</h1>
        <form  >
        Search-by-course : <input  type="text"  onChange={this.searchHandler} value={term} />
        </form>
        </div>
        <tr style={{ background:'red'}} >
        <th>CourseID</th>
        <th>Title</th>
        <th>Duration</th>
        <th>Category</th>

        <th>More</th>
        </tr>
        {postdata.filter(searchFor(term)).map((postdetial, index) =>{
          return <div >


              <td>{postdetial.courseId}</td>
              <td>{postdetial.title}</td>
              <td>{postdetial.duration}</td>
              <td>{postdetial.category}</td>

              <td><button style={{
                background: 'white',
                color: 'black',
                padding: '10px 20px',
                fontsize: '16px',
                cursor: 'pointer',
                float:'left',
                marginright: '100px',
                display:'inline',

                }}>Detail</button></td>




              </div>


        })}


        </div>

      );
    }
  }
