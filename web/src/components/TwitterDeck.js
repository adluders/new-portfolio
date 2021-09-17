import React from "react";
import styled from "styled-components";

const Wrapper = styled.section``;

const Title = styled.h3`
  font-family: "Gravitas One";
  text-transform: capitalize;
`;

const Tweets = styled.div`
  background-color: #1da1f2;
  border-radius: 0.5rem;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0.5rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.8rem;
`;

const Tweet = styled.p`
  font-size: 1.1rem;
`;

const TwitterDeck = ({ tweets }) => {
  return (
    <Wrapper>
      <Title>let's get social! </Title>

      <Tweets>
        {tweets.map(tweet => {
          return (
            <Card>
              <Tweet> {tweet.text} </Tweet>
            </Card>
          );
        })}
      </Tweets>
    </Wrapper>
  );
};

export default TwitterDeck;
