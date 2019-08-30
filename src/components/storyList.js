import React, { useEffect, useState } from "react";
import axios from "axios";
import StoryCard from "./storyCard";
import "semantic-ui-css/semantic.min.css";


export default function StoryList(props) {
 


   const [stories, setStories] = useState([]);
  
   useEffect(() => {
    axios
    .get("https://refugee-stories-backend-1.herokuapp.com/stories")
    .then(response => {
      setStories(response.data);
         })
    .catch(error => {
      console.log("error", error);
    });
  }, []);

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
