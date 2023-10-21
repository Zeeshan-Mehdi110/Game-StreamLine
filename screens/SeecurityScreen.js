import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SeecurityScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 10,
            paddingRight: 10,
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
          {'Security'}
        </Text>
      </View>
      {/* Settings */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 10, paddingLeft: 24, paddingRight: 24 },
          dimensions.width
        )}
      >
        {/* Remember me */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 10 }, dimensions.width)}
        >
          {/* Item */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Remember me'}
            </Text>
            <Switch />
          </View>
        </Touchable>
        {/* Biometric ID */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 10 }, dimensions.width)}
        >
          {/* Item */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Biometric ID'}
            </Text>
            <Switch />
          </View>
        </Touchable>
        {/* Face ID */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 10 }, dimensions.width)}
        >
          {/* Item */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Face ID'}
            </Text>
            <Switch />
          </View>
        </Touchable>
        {/* Two-Factor Authentication */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 10 }, dimensions.width)}
        >
          {/* Item */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Two-Factor Authentication'}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Change PIN */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_18'],
              borderRadius: 100,
              color: theme.colors['Custom Color'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 58,
              marginTop: 24,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Change PIN'}
        />
        {/* Change Password */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_18'],
              borderRadius: 100,
              color: theme.colors['Custom Color'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 58,
              marginTop: 24,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Change Password'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SeecurityScreen);
