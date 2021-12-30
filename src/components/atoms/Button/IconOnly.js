import React from 'react';
import {TouchableOpacity} from 'react-native';
import { ICBack } from '../../../assets/icon';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
      if(icon === 'back-green'){
          return <ICBack/>
      }
      return <ICBack/>
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon/>
    </TouchableOpacity>
  );
};

export default IconOnly;
