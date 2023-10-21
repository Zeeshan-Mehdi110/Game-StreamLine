import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const Block2Btns = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        },
        dimensions.width
      )}
    >
      <Button
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color_18'],
            borderRadius: 100,
            color: theme.colors['Custom Color'],
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            height: 58,
            textAlign: 'center',
            width: '48%',
          },
          dimensions.width
        )}
        title={'Cancel'}
      />
      <Button
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 100,
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            height: 58,
            textAlign: 'center',
            width: '48%',
          },
          dimensions.width
        )}
        title={'Submit'}
      />
    </View>
  );
};

export default withTheme(Block2Btns);
