import self from '../img/avatar.png';

/* Hi there! Thanks for checking out my portfolio template.
Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export const colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/
to generate a pair of colors that you like.
These colors will be used to style your name on the homepage,
the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory,
like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at
the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Bruno',
  lastName: 'Kambere',
  initials: 'bk', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Engineer',
  // don't change this unless you want to name your self-portrait in the "img" folder something else
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the DRC',
    },
    {
      emoji: '💼',
      text: 'Web Developer at EvoluData',
    },
    {
      emoji: '📧',
      text: 'brunokambere@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://facebook.com',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://instagram.com',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    // Feel free to remove any of these that you don't have.
    // I'll write an FAQ on how to add new ones later,
    // let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.

  ],
  bio: "Hello! I'm Bruno. I'm a Software engineer for Google. I studied CompSci at Harvard, "
  + 'I enjoy long walks on the beach, and I believe artificial intelligence will inevitably '
  + 'rule us all one day. You should hire me!',
  skills:
        {
          proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
          exposedTo: ['java', 'PHP', 'Ruby'],
        },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'Music Hip-Hop',
      emoji: '🎧',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [ // This is where your portfolio projects will be detailed

  ],
};
