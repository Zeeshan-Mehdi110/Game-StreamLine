import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const LetsyouInScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.LetsyouIn}
          style={StyleSheet.applyWidth(
            { height: 156, width: 300 },
            dimensions.width
          )}
        />
        {/* Let’s you in */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_700Bold',
              fontSize: 30,
            },
            dimensions.width
          )}
        >
          {'Let’s you in'}
        </Text>
        {/* Facebook */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 2,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 2,
                borderRadius: 16,
                borderRightWidth: 2,
                borderTopWidth: 2,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.ObFB}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Continue with Facebook'}
            </Text>
          </View>
        </Touchable>
        {/* Google */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 2,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 2,
                borderRadius: 16,
                borderRightWidth: 2,
                borderTopWidth: 2,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                marginTop: 5,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.ObGoogle}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Continue with Google'}
            </Text>
          </View>
        </Touchable>
        {/* Apple */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 2,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 2,
                borderRadius: 16,
                borderRightWidth: 2,
                borderTopWidth: 2,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                marginTop: 5,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.ObApple}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Continue with Apple'}
            </Text>
          </View>
        </Touchable>
        {/* OR */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 45,
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              { height: 2, width: '40%' },
              dimensions.width
            )}
          />
          {/* OR */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 18,
                marginLeft: 20,
                marginRight: 20,
              },
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              { height: 2, width: '40%' },
              dimensions.width
            )}
          />
        </View>
        {/* Sign in with Password */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 58,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Sign in with Password'}
        />
        {/* Sign up */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('SignupScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_20'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'Don’t have an account?'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: 7,
                },
                dimensions.width
              )}
            >
              {'Sign up'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LetsyouInScreen);
