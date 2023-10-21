import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ZxcBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable
      style={StyleSheet.applyWidth(
        { marginLeft: 20, marginRight: 20, marginTop: 20, width: '100%' },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['App Green'],
            flexDirection: 'column',
            paddingBottom: 4,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <Image
            resizeMode={'cover'}
            source={Images.LastStream}
            style={StyleSheet.applyWidth(
              { borderRadius: 16, height: 215, width: '100%' },
              dimensions.width
            )}
          />
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

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_2'],
                borderRadius: 6,
                bottom: 20,
                height: 24,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                width: 90,
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
              {'9.4K Viewers'}
            </Text>
          </View>
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(ZxcBlock);
