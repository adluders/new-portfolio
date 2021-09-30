import React from "react";
import styled from "styled-components";
import { FaTwitter, FaRetweet, FaHeart } from "react-icons/fa";

const Wrapper = styled.section`
  max-width: 65%;
  margin: auto;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.a`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: max-content;
  margin: auto;
  margin-bottom: 1rem;
  svg {
    font-size: 2rem;
    fill: #1da1f2;
  }
`;

const Tweets = styled.div`
  background-color: #1da1f2;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-bottom: solid 1px #ccc;
  padding: 1rem;
  &:first-of-type {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &:last-of-type {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;

const TweetContent = styled.a`
  display: grid;
  grid-template-areas:
    "tweet tweet"
    "retweet likes";
  gap: 0.5rem;
`;

const Tweet = styled.p`
  font-size: 1.1rem;
  color: #000;
  grid-area: tweet;
`;

const Retweets = styled.p`
  grid-area: retweet;
  color: #1da1f2;
  font-size: 1.2rem;
`;

const Likes = styled.p`
  grid-area: likes;
  color: red;
`;

const TwitterDeck = ({ tweets }) => {
  const BASE_URL = "https://twitter.com/just_a_devguy";

  return (
    <Wrapper>
      <Title href={`${BASE_URL}`} target="_blank" rel="noopener norefferer">
        @just_a_devguy <FaTwitter />
      </Title>

      <Tweets>
        {tweets.map((tweet, inx) => {
          const { retweet_count, favorite_count, id_str, full_text } = tweet;
          return (
            inx < 50 && (
              <Card key={inx}>
                <TweetContent
                  target="_blank"
                  href={`${BASE_URL}/status/${id_str}`}
                >
                  <Tweet>{full_text} </Tweet>

                  <Retweets>
                    <FaRetweet /> {retweet_count}
                  </Retweets>
                  <Likes>
                    <FaHeart /> {favorite_count}
                  </Likes>
                </TweetContent>
              </Card>
            )
          );
        })}
      </Tweets>
    </Wrapper>
  );
};

export default TwitterDeck;
