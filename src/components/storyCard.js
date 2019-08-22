import React from "react";
import {Icon, Card} from 'semantic-ui-react';

export default function StoryCard(props) {
  const extra = (
    <a>
      <Icon name="tv" />
       something fun here
    </a>
  )


    return (
      

    <Card
      image={props.imageurl}
      header={props.title}
      meta={props.name}
      description={props.story}
      extra={extra}

      />
    );
}
