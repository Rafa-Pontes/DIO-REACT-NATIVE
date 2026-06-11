import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatInputStyles';

interface BatInputProps {
  pass: string;
}

export function BatInput(props: BatInputProps) {
  return (
    <TextInput 
        style={styles.Inputer}
        placeholder='PASS'
        value={props.pass} 
        multiline={true}
        editable={false} 
    />
  );
}