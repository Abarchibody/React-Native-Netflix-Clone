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
    title: "Dark",
    desc:
      "Jake Gyllenhaal is unnerving and absorbing as a modern-day “Taxi Driver” in what A.O. Scott called “a modest and effectively executed urban thriller.”",
    poster:
      "https://www.awesomepostersonline.com/uploads/2018-06-01/b1fb1ea4/f336f3fb80e.jpg",
    limit: "13",
    year: 2018,
    duration: 123,
    original: true,
  },
  {
    id: 2,
    title: "Stranger Things",
    desc:
      "Steven Spielberg’s gripping adaptation of the best seller by Michael Crichton is both a terrifying thriller and a thoughtful commentary on the moral challenges of scientific advancement. Richard Attenborough stars as a wealthy industrialist who has figured out how to isolate and reanimate dinosaur DNA",
    poster:
      "https://cdn.vox-cdn.com/thumbor/HCYOnMApX2tpWmlz_MQJ6OAVz-E=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9253647/stranger_things_2.jpg",
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
      "https://static2.showtimes.com/poster/660x980/the-lovebirds-netflix-145127.jpg",
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
      "https://m.media-amazon.com/images/M/MV5BMDIzNGNhMzItYWFiNS00Y2VlLWI2ZDMtYzRiYzFhZDYxMzBiXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
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
      "https://media1.popsugar-assets.com/files/thumbor/-RevzKwpDfeIpOVs_R2mM-mcCJ8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/10/26/835/n/1922283/926454f60a7558bb_GilmoreGirls_1sht_LUKE_US/i/Gilmore-Girls-Netflix-Series-Posters.jpg",
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
