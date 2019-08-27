import React, { useEffect, useState } from "react";
import axios from "axios";
import StoryCard from './storyCard';

// testing  
import data from './data.js';
// end testing


export default function StoryList(props) {
  
  // testing
  const stories = data;
  // end testing


  // const [stories, setStories] = useState([]);
  
  // testing 
  console.log(data);
  //end testing

  /*useEffect(() => {
    axios
    .get("https://refugee-stories-backend-bw.herokuapp.com/stories")
    .then(response => {
      setStories(data);
         })
    .catch(error => {
      console.log("error", error);
    });
  }, []);
  */

  return (
    <section className="character-list grid-view">
      {stories.map(tale => (
       <StoryCard 
        key={tale.id}
        img={tale.imageurl}
        name={tale.name}
        title={tale.title}
        story={tale.story}
        isApproved={tale.isapproved}
        />
    ))}
  </section>
    );
  }