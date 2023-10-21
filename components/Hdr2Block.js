import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const Hdr2Block = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          height: 48,
          marginTop: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        dimensions.width
      )}
    >
      {/* Back Click */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 48,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            color={theme.colors['Custom Color_2']}
            name={'Ionicons/arrow-back-sharp'}
            size={24}
          />
        </Touchable>
      </View>
      {/* Screen Heading */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 20,
            marginLeft: 16,
          },
          dimensions.width
        )}
      >
        {'Payment Methods'}
      </Text>
    </View>
  );
};

export default withTheme(Hdr2Block);
