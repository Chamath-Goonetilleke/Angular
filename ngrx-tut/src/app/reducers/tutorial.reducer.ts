import { Action } from '@ngrx/store';
import { Tutorial } from '../modals/tutorial.modal';
import * as TutorialActions from './../actions/tutorial.actions';

// Section 1
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com',
};

// Section 2
export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
