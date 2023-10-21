import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, View, useWindowDimensions } from 'react-native';

const LiveStreamFullviewScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={Images.FullView}
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            height: '100%',
            justifyContent: 'space-between',
            width: '100%',
          },
          dimensions.width
        )}
      >
        <LinearGradient
          color1={theme.colors['Strong']}
          color2={'"rgba(0, 0, 0, 0)"'}
          endX={100}
          endY={0}
          style={StyleSheet.applyWidth(
            {
              height: '100%',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingLeft: 20,
              paddingTop: 20,
              width: 75,
            },
            dimensions.width
          )}
        >
          <Touchable>
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
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'Ionicons/chatbubble-ellipses-outline'}
                size={24}
              />
            </View>
          </Touchable>

          <Touchable>
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
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'MaterialCommunityIcons/fullscreen-exit'}
                size={24}
              />
            </View>
          </Touchable>
        </LinearGradient>

        <LinearGradient
          color1={theme.colors['Strong']}
          color2={'"rgba(0, 0, 0, 0)"'}
          endX={0}
          endY={0}
          startX={100}
          style={StyleSheet.applyWidth(
            {
              height: '100%',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingTop: 20,
              width: 75,
            },
            dimensions.width
          )}
        >
          <Touchable>
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
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'AntDesign/left'}
                size={24}
              />
            </View>
          </Touchable>

          <Touchable>
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
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'Ionicons/settings-outline'}
                size={24}
              />
            </View>
          </Touchable>
        </LinearGradient>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(LiveStreamFullviewScreen);
