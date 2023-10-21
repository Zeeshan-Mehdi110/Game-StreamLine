import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const RedBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_8'],
          borderRadius: 6,
          height: 24,
          justifyContent: 'center',
          left: 20,
          position: 'absolute',
          top: 20,
          width: 41,
        },
        dimensions.width
      )}
    >
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom #ffffff'],
            fontFamily: 'Inter_400Regular',
            fontSize: 12,
            paddingBottom: 4,
            paddingTop: 4,
          },
          dimensions.width
        )}
      >
        {'LIVE'}
      </Text>
    </View>
  );
};

export default withTheme(RedBlock);
