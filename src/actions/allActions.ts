import { UserActionTypes } from './user/types';
import { WebsocketActionTypes } from './ws/types';
import { GameActionTypes } from './game/types';

export type AllActionTypes = UserActionTypes | WebsocketActionTypes | GameActionTypes