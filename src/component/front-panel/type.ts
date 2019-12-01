import { Dispatch, SetStateAction } from 'react';

export interface Props {
  onClickPower: Dispatch<SetStateAction<boolean>>;
  powerOn: boolean;
}
