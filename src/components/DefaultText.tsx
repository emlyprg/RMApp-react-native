import React from 'react';
import {Text, TextStyle} from 'react-native';
import {colors} from '../constants/colors';

interface DefaultTextProps {
  content: string;
  styles?: TextStyle;
}

export const DefaultText = ({content, styles}: DefaultTextProps) => (
  <Text style={{color: colors.White, fontSize: 16, ...styles}}>{content}</Text>
);
