import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Circle, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const PaBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable
      style={StyleSheet.applyWidth(
        { marginLeft: 20, marginTop: 20 },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'column',
            height: 90,
            width: 84,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Circle bgColor={theme.colors['Custom Color_8']} size={84} />
        </View>

        <View
          style={StyleSheet.applyWidth(
            { left: 2, position: 'absolute', top: 2 },
            dimensions.width
          )}
        >
          <Circle bgColor={theme.colors.light} size={80}>
            <Image
              resizeMode={'cover'}
              source={Images.Games}
              style={StyleSheet.applyWidth(
                { borderRadius: 16, height: 80, width: 80 },
                dimensions.width
              )}
            />
          </Circle>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color_8'],
              borderRadius: 6,
              height: 24,
              justifyContent: 'center',
              top: -14,
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
              },
              dimensions.width
            )}
          >
            {'LIVE'}
          </Text>
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(PaBlock);
