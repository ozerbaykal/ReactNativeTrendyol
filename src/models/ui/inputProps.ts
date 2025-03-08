import {ChangeEvent} from 'react';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  title: string;
  secureTextEntry?: boolean;
  onBlur: (e: any) => void;
  onSubmit?: () => void;
}

export type {InputProps};
