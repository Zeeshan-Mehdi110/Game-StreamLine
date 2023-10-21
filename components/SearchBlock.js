import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const SearchBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['BG Gray'],
          borderBottomWidth: 1,
          borderColor: theme.colors['Divider'],
          borderLeftWidth: 1,
          borderRadius: 16,
          borderRightWidth: 1,
          borderTopWidth: 1,
          flexDirection: 'row',
          height: 56,
          marginBottom: 20,
          marginTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Custom Color_21']}
        name={'EvilIcons/search'}
        size={24}
      />
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center', marginLeft: 5, marginRight: 5 },
          dimensions.width
        )}
      >
        <TextInput
          editable={true}
          placeholder={'Search'}
          placeholderTextColor={theme.colors['Custom Color_21']}
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors.divider,
              borderRadius: 8,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        />
      </View>

      <Touchable>
        <Icon
          color={theme.colors['Custom Color']}
          name={'FontAwesome/microphone'}
          size={20}
        />
      </Touchable>
    </View>
  );
};

export default withTheme(SearchBlock);
