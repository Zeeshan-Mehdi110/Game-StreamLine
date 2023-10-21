import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const ForgotPasswordScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Header */}
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
          {'Forgot Password'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginTop: 20 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.FPimage}
              style={StyleSheet.applyWidth(
                { height: 225, width: 250 },
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  marginTop: 30,
                },
                dimensions.width
              )}
            >
              {
                'Select which contact details should we use to reset your password'
              }
            </Text>
          </View>
          {/* SMS */}
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
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                    },
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
          {/* Email */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 2,
                  borderRadius: 32,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 110,
                  marginTop: 20,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.ViaEmail}
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
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'via Email:'}
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
                  {'and***ey@yourdomain.com'}
                </Text>
              </View>
            </View>
          </Touchable>
        </View>
        {/* Continue */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('ConfirmOTPScreen');
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
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Continue  '}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ForgotPasswordScreen);
