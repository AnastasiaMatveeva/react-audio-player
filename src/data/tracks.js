import bach from './bach.mp3';
import beethoven from './beethoven.mp3';
import mozart from './mozart.mp3';
import strauss from './strauss.mp3';
import vivaldi from './vivaldi.mp3';
import bachImg from './Bach.jpeg';
import MozartImg from './MozartImg.jpeg';
import BeethovenImg from './BeethovenImg.jpeg';
import VivaldiImg from './VivaldiImg.jpeg';
import StraussImg from './StraussImg.jpeg';


export const tracks = [
    {
      title: 'Johann Sebastian Bach - Partita No. 2 for',
      src: bach,
      author: 'Johann Sebastian Bach',
      thumbnail: bachImg,
    },
    {
        title: 'Wolfgang Amadeus Mozart - I. Allegro',
        src: mozart,
        author: 'Wolfgang Amadeus Mozart',
        thumbnail: MozartImg,
      },

      {
        title: 'London Symphony Orchestra - Symphony No. 9 In D Minor',
        src: beethoven,
        author: 'London Symphony Orchestra',
        thumbnail: BeethovenImg,
      },
      {
        title: 'Antonio Vivaldi - Concerto In E Major for Violin',
        src: vivaldi,
        author: 'Antonio Vivaldi',
        thumbnail: VivaldiImg,
      },
      {
        title: 'Strauss - Radetzky March',
        src: strauss,
        author: 'Strauss',
        thumbnail: StraussImg,
      },
  ];