import { Dispatch, SetStateAction } from 'react';

export interface Props {
  onClick: Dispatch<SetStateAction<boolean>>;
  powerOn: boolean;
}
