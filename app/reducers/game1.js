import { fromJS } from 'immutable';

const sentences = [
  // 'Lung linh bao anh sang',
  // 'Huong thom noi ta da hen',
  // 'Tinh se chap canh bay xa',
  'This is a fight song  ',
  'Get back my life song',
  'Prove I\'m all right song ohoh',
];

const hidden = sentences.map(
  sentence => sentence.trim().split(' ').map(word => true)
);

const selectedWordId = sentences.map(sentence => '');

const game1 = (
  state = fromJS({
    sentences,
    hidden,
    selectedWordId,
  }),
  action
) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state
        .updateIn(['hidden', action.round, action.word], x => !x)
        .setIn(['selectedWordId', action.round], action.word);
    default:
      return state;
  }
};

export default game1;
