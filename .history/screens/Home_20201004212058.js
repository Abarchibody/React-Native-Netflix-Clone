import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Feature from "../components/Feature";
import Stories from "../components/Stories";
import Movies from "../components/Movies";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const trendMovieArray = [
  {
    id: 1,
    title: "Nightcrawler",
    desc:
      "Jake Gyllenhaal is unnerving and absorbing as a modern-day “Taxi Driver” in what A.O. Scott called “a modest and effectively executed urban thriller.”",
    poster:
      "https://static01.nyt.com/images/2014/09/04/arts/nightcrawler-watching-recommendation/nightcrawler-watching-recommendation-jumbo-v5.jpg?quality=90&auto=webp",
    limit: "13",
    year: 2014,
    duration: 123,
    original: true,
  },
  {
    id: 2,
    title: "Jurassic Park",
    desc:
      "Steven Spielberg’s gripping adaptation of the best seller by Michael Crichton is both a terrifying thriller and a thoughtful commentary on the moral challenges of scientific advancement. Richard Attenborough stars as a wealthy industrialist who has figured out how to isolate and reanimate dinosaur DNA",
    poster:
      "https://static01.nyt.com/images/2018/06/11/watching/jurassic-park-watching3/jurassic-park-watching3-jumbo.jpg?quality=90&auto=webp",
    limit: "13",
    year: 1993,
    duration: 113,
    original: false,
  },
  {
    id: 3,
    title: "Eternal Sunshine of the Spotless Mind",
    desc:
      "This 2004 breakthrough film by Michel Gondry is a miraculous combination of science fiction ideas, romantic-comedy meet-cutes and lovelorn drama, somehow delivering on all counts. Working from a typically clever screenplay by Charlie Kaufman",
    poster:
      "https://static01.nyt.com/images/2016/07/06/watching/eternal-sunshine-watching-recommendation/eternal-sunshine-watching-recommendation-jumbo-v2.jpg?quality=90&auto=webp",
    limit: "13",
    year: 2004,
    duration: 110,
    original: true,
  },
  {
    id: 4,
    title: "The Witches",
    desc:
      "A delightfully playful bedtime story with a wicked sense of humor, this family adventure is adapted from a novel by Roald Dahl, and comes with his deliciously dark and cynical worldview intact. Younger viewers will treasure its inventive ",
    poster:
      "https://static01.nyt.com/images/2017/07/14/watching/the-witches-watching-recommendation/the-witches-watching-recommendation-jumbo-v2.jpg?quality=90&auto=webp",
    limit: "13",
    year: 1990,
    duration: 120,
    original: false,
  },
  {
    id: 5,
    title: "Spotlight",
    desc:
      "Winner of the Oscar for best picture of 2015, this ensemble drama focuses on the Boston Globe’s investigation of child sex abuse in the Roman Catholic church, which culminated in a bombshell series that won the Pulitzer Prize. ",
    poster:
      "https://static01.nyt.com/images/2016/08/09/watching/spotlight-watching-recommendation/spotlight-watching-recommendation-jumbo.jpg?quality=90&auto=webp",
    limit: "13",
    year: 2015,
    duration: 141,
    original: true,
  },
  {
    id: 6,
    title: "The Old Guard",
    desc:
      "Gina Prince-Blythewood’s adaptation of Greg Rucka’s comic book series delivers the expected goods: The action beats are crisply executed, the mythology is clearly defined and the pieces are carefully placed for future installments.",
    poster:
      "https://static01.nyt.com/images/2020/07/09/arts/09oldguard/merlin_174158364_730c4367-994f-46e7-b7f0-26cd75a4e166-jumbo.jpg?quality=90&auto=webp",
    limit: "13",
    year: 2020,
    duration: 111,
    original: false,
  },
];

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Feature />
        <Stories />
        <Movies movies={trendMovieArray} />
      </Container>
    </>
  );
};

export default Home;
