import React from "react"
import ReviewCard from "../src/components/ReviewCard/ReviewCard"
import { storiesOf } from '@storybook/react';
import ApolloWraper from '../src/components/ReviewCard/ApolloProvider';

storiesOf('SC/Review Card', module).add('Card Review', ()=> (
    <ApolloWraper>
      <ReviewCard />
    </ApolloWraper>
    )) 

