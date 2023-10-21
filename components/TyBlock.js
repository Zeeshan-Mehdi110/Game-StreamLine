import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const TyBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 3,
            borderColor: theme.colors['Custom Color'],
            borderLeftWidth: 3,
            borderRadius: 32,
            borderRightWidth: 3,
            borderTopWidth: 3,
            flexDirection: 'row',
            height: 110,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.IconSMS}
          style={StyleSheet.applyWidth(
            { height: 80, marginLeft: 20, width: 80 },
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around', marginLeft: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              { color: theme.colors.strong, fontFamily: 'Inter_400Regular' },
              dimensions.width
            )}
          >
            {'via SMS:'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'+1 111 ******99'}
          </Text>
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(TyBlock);
