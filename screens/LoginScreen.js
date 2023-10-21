import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Divider,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
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
          {/* Logo */}
          <Image
            resizeMode={'cover'}
            source={Images.BigLogo}
            style={StyleSheet.applyWidth(
              { height: 120, width: 120 },
              dimensions.width
            )}
          />
          {/* Login to Your Account */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_700Bold',
                fontSize: 28,
              },
              dimensions.width
            )}
          >
            {'Login to Your Account'}
          </Text>
          {/* Email */}
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
                height: 60,
                justifyContent: 'space-between',
                marginTop: 15,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom Color_20']}
              name={'MaterialCommunityIcons/email'}
              size={24}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 10, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                editable={true}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Email'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
          </View>
          {/* Password */}
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
                height: 60,
                justifyContent: 'space-between',
                marginTop: 15,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom Color_20']}
              name={'FontAwesome/lock'}
              size={24}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 10, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                editable={true}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Password'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
            <Icon
              color={theme.colors['Custom Color_20']}
              name={'Ionicons/md-eye-off'}
              size={24}
            />
          </View>
          {/* Remember me */}
          <View style={StyleSheet.applyWidth({ width: 160 }, dimensions.width)}>
            <CheckboxRow
              direction={'row-reverse'}
              label={'Remember me'}
              onPress={newCheckboxRowValue => {
                try {
                  setCheckboxRowValue(newCheckboxRowValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ minHeight: 50 }, dimensions.width)}
            />
          </View>
          {/* Sign in */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 100,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 15,
                height: 58,
                textAlign: 'center',
                width: '100%',
              },
              dimensions.width
            )}
            title={'Sign in'}
          />
          {/* Forgot Password */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ForgotPasswordScreen');
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
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'Forgot Password?'}
              </Text>
            </View>
          </Touchable>
          {/* or continue with */}
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
                { height: 2, width: '20%' },
                dimensions.width
              )}
            />
            {/* OR */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 20,
                  marginRight: 20,
                  opacity: 0.7,
                },
                dimensions.width
              )}
            >
              {'or continue with'}
            </Text>
            <Divider
              color={theme.colors.divider}
              style={StyleSheet.applyWidth(
                { height: 2, width: '20%' },
                dimensions.width
              )}
            />
          </View>
          {/* Social options */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              },
              dimensions.width
            )}
          >
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
                    width: 88,
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
                    width: 88,
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
                    width: 88,
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
              </View>
            </Touchable>
          </View>
          {/* Sign up */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SignupScreen');
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
                  flexDirection: 'row',
                  justifyContent: 'center',
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
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
