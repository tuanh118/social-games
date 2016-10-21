import { fromJS } from 'immutable';

const songs = [
  {
    title: 'Mat tri nho',
    imgUrl: 'http://image.mp3.zdn.vn/covers/a/6/a6e46053ef8f167b07ea577c68c4c977_1351653104.jpg',
  },
  {
    title: 'Ba ke con nghe',
    imgUrl: 'https://i.ytimg.com/vi/Z8MbZW91jWg/hqdefault.jpg',
  },
  {
    title: 'Make you feel my love',
    imgUrl: 'http://orig12.deviantart.net/42f2/f/2011/244/3/4/to_make_you_feel_my_love_by_3_al5ater-d48i35v.jpg',
  },
  {
    title: 'Fix you',
    imgUrl: 'http://lookingforlukah.us/wp-content/uploads/2016/03/Fix-you-2.png',
  },
  {
    title: 'Somewhere only we know',
    imgUrl: 'https://tipsytirade.files.wordpress.com/2015/10/il_570xn-419793334_f48r.jpg',
  },
  {
    title: 'Tiny Dancer',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/37/Elton_John_Tiny_Dancer.jpg',
  },
  {
    title: 'Heart skips a beat',
    imgUrl: 'http://991.com/NewGallery/Lenka+Heart+Skips+A+Beat+534831.jpg',
  },
  {
    title: 'Fly me to the moon',
    imgUrl: 'https://uxfactor.files.wordpress.com/2013/10/fly-me-to-the-moon.png',
  },
  {
    title: 'We don\'t have to take our clothes off',
    imgUrl: 'https://i.ytimg.com/vi/1zwy2a_Nunc/hqdefault.jpg',
  },
  {
    title: 'Edge of Glory',
    imgUrl: 'https://images.rapgenius.com/30838b5a9099c358d4ac5302b5df87b5.800x454x1.jpg',
  },
  {
    title: 'How Deep Is Your Love',
    imgUrl: 'http://www.heroarrangements.com/wp-content/uploads/2014/12/BeeGees-HowDeep.jpg',
  },
  {
    title: 'Halo',
    imgUrl: 'https://inspirationoflyric.files.wordpress.com/2009/03/ohhellyes-beyonce-halo.jpg',
  },
  {
    title: 'Pretty Boy',
    imgUrl: 'http://music.mthai.com/wp-content/uploads/2016/02/M2M.jpg',
  },
  {
    title: 'De Gio Cuon Di',
    imgUrl: 'http://i214.photobucket.com/albums/cc72/delta38_1/TrinhCongSon.jpg',
  },
  {
    title: 'Let Her Go',
    imgUrl: 'https://f4.bcbits.com/img/a0093276483_16.jpg',
  },
  {
    title: 'Toxic',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/21/Britney_Spears_Toxic.png',
  },
  {
    title: 'Royals',
    imgUrl: 'http://www.clubdancemixes.com/wp-content/uploads/2013/10/royals-lorde.jpg',
  },
  {
    title: 'Chandelier',
    imgUrl: 'https://i.ytimg.com/vi/Iv8Df437ptw/hqdefault.jpg',
  },
  {
    title: 'Thrift Shop',
    imgUrl: 'http://images.younghouselove.com/2013/01/Macklemore-Challenge.jpg',
  },
  {
    title: 'Hello Vietnam',
    imgUrl: 'http://hopamviet.vn/assets/images/editor/Bonjour%20VN1.png',
  },
];

const guessed = songs.map(
  song => false
);

const game2 = (
  state = fromJS({
    songs,
    guessed,
  }),
  action
) => {
  switch (action.type) {
    case 'CORRECT_GUESS':
      return state.setIn(['guessed', action.songId], true);
    default:
      return state;
  }
};

export default game2;
