import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { ImageBackground, Text, useWindowDimensions } from 'react-native';

const WelcomescreenScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('LetsyouInScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          { height: '100%', width: '100%' },
          dimensions.width
        )}
      >
        <ImageBackground
          resizeMode={'stretch'}
          source={Images.Welcome}
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'flex-end', width: '100%' },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_700Bold',
                fontSize: 38,
                paddingLeft: 30,
                paddingRight: 30,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Welcome to\nStreamo! 👋'}
          </Text>
          {/* sub-title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                lineHeight: 25,
                paddingBottom: 45,
                paddingLeft: 35,
                paddingRight: 35,
                paddingTop: 15,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </Text>
        </ImageBackground>
      </Touchable>
    </ScreenContainer>
  );
};

export default withTheme(WelcomescreenScreen);
