import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FsBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          bottom: 20,
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
        },
        dimensions.width
      )}
    >
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderRadius: 100,
              flexDirection: 'row',
              height: 45,
              justifyContent: 'center',
              width: 176,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Custom #ffffff']}
            name={'MaterialIcons/tune'}
            size={24}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_500Medium',
                marginLeft: 8,
              },
              dimensions.width
            )}
          >
            {'Filter & Sort'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(FsBlock);
