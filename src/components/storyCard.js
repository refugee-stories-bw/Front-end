import React from "react";
import {Icon, Card} from 'semantic-ui-react';

export default function StoryCard(props) {
  const extra = (
    <a>
      <Icon name="globe" />
       Find Local NGO
    </a>
  )


    return (
      

    <Card
      image={props.img}
      header={props.title}
      meta={props.name}
      description={props.story}
      extra={extra}

      />
    );
}
