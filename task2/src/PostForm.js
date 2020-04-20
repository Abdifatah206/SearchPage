import React, { Component } from 'react';
import axios from 'axios';


export default class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      courseId :  '',
      title : '',
      shortDescription : '',
      url : '',
      imgUrl : '',
      location : '',
      providerRatings : '',
      extraDetails : '',
      effort : '',
      duration : '',
      durationPeriod : '',
      costUsd : '',
      startDate : '',
      provider : '',
      author : '',
      level : '',
      medium : '',
      language : '',
      academicProvider : '',
      category : '',
      quzeCategory : '',
      programType : '',
      tags : '',
      quzeTags : '',
      numUpvotes : '',
      numRatings : '',
      avgRatings : ''

    }
  }
  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
    .post('http://staging-api.quze.co/search/intern-test/_search', this.state)
    .then(response => {
      console.log(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  render(){
    const { courseId ,
       title,
       shortDescription ,
       url ,
       imgUrl ,
       location ,
       providerRatings,
       extraDetails,
       effort,
       duration,
       durationPeriod,
       costUsd,
       startDate,
       provider,
       author,
       level,
       medium,
       language,
       academicProvider,
      category,
      quzeCategory,
      programType,
      tags,
      quzeTags,
      numUpvotes,
      numRatings,
      avgRatings
      } = this.state
    return(

      <div  style={{border : '1px solid' ,  width : '50%', background : 'violet', margin : '0 auto' }}>
      <h3>Quze Courses Registration </h3>
      <form onSubmit={this.submitHandler}>
      <div>
      CourseID = <input type="text" name="courseId" placeholder="CourseID" value = { courseId } onChange={ this.changeHandler}/>
      Title = <input type="text" name="title" placeholder="Title" value = { title } onChange={ this.changeHandler} /> <br /><br />
      </div>
      <div>
      ShortDescription = <input type="text" placeholder="shortDescription" name="shortDescription" value = { shortDescription } onChange={ this.changeHandler} />
      URL = <input type="text" name="url"  placeholder="Url" value = { url } onChange={ this.changeHandler}/><br /><br />
      </div>
      <div>
      Image_URL = <input type="text" name="imgUrl" placeholder="Image_URL" value = { imgUrl } onChange={ this.changeHandler} />
      Location = <input type="text" name="location" placeholder="location" value = { location } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      providerRatings = <input type="text" name="providerRatings" placeholder="providerRatings" value = { providerRatings } onChange={ this.changeHandler} />
      ExtraDetails = <input type="text" name="extraDetails" placeholder="extraDetails" value = { extraDetails } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      Effort = <input type="text" name="effort" placeholder="effort" value = { effort } onChange={ this.changeHandler}/>
      Duration = <input type="text" name="duration" placeholder="duration" value = { duration } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      Duration_Period = <input type="text" name="durationPeriod" placeholder="durationPeriod" value = { durationPeriod } onChange={ this.changeHandler} />
      CostUsd = <input type="text" name="costUsd" placeholder="costUsd" value = { costUsd} onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      StartDate = <input type="text" name="startDate" placeholder="startDate" value = { startDate } onChange={ this.changeHandler} />
      Provider = <input type="text" name="provider"  placeholder="provider" value = { provider } onChange={ this.changeHandler}/><br /><br />
      </div>
      <div>
      Author = <input type="text" name="author" placeholder="author" value = { author } onChange={ this.changeHandler} />
      Level = <input type="text" name="level"placeholder="level" value = { level } onChange={ this.changeHandler} /><br /><br />
      </div>

      <div>
      Medium = <input type="text" name="medium" placeholder="medium" value = { medium} onChange={ this.changeHandler} />
      Language = <input type="text" name="language" placeholder="language" value = { language } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      Academic_Provider = <input type="text" name="academicProvider"  placeholder="academicProvider" value = { academicProvider } onChange={ this.changeHandler}/>
      Category = <input type="text" name="category" placeholder="category" value = { category } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      Quze_Category = <input type="text" name="quzeCategory" placeholder="quzeCategory" value = { quzeCategory } onChange={ this.changeHandler} />
      Program_Type = <input type="text" name="programType" placeholder="programType" value = { programType } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      Tags = <input type="text" name="tags" placeholder="tags" value = { tags } onChange={ this.changeHandler} />
      Quze_Tags = <input type="text" name="quzeTags" placeholder="quzeTags"  value = { quzeTags } onChange={ this.changeHandler}/><br /><br />
      </div>
      <div>
      NumUp _votes = <input type="text" name="numUpvotes" placeholder="numUpvotes" value = { numUpvotes } onChange={ this.changeHandler} />
      Num_Ratings = <input type="text" name="numRatings" placeholder="numRatings" value = { numRatings } onChange={ this.changeHandler} /><br /><br />
      </div>
      <div>
      AVG_Ratings = <input type="text" name="avgRatings" placeholder="avgRatings" value = { avgRatings } onChange={ this.changeHandler} />
      </div>


      <button type="submit">Submit </button>
      </form>
      </div>
    )
  }
}
