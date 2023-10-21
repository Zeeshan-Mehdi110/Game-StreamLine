import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const HdngBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          paddingTop: 20,
        },
        dimensions.width
      )}
    >
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_600SemiBold',
            fontSize: 21,
          },
          dimensions.width
        )}
      >
        {'Live Channels You May Like'}
      </Text>

      <Touchable>
        <Icon
          color={theme.colors['Custom Color']}
          name={'AntDesign/arrowright'}
          size={24}
        />
      </Touchable>
    </View>
  );
};

export default withTheme(HdngBlock);
