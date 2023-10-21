import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const AboutStreamoScreen = props => {
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
          {'About Streamo'}
        </Text>
      </View>
      {/* Version Info */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: theme.colors['Divider'],
            marginLeft: 24,
            marginRight: 24,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.BigLogo}
          style={StyleSheet.applyWidth(
            { height: 140, width: 140 },
            dimensions.width
          )}
        />
        {/* Version number */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
              paddingBottom: 24,
              paddingTop: 24,
            },
            dimensions.width
          )}
        >
          {'Streamo v7.4.5'}
        </Text>
      </View>
      {/* Navigations */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 10, paddingLeft: 24, paddingRight: 24 },
          dimensions.width
        )}
      >
        {/* Privacy policy */}
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
            {/* Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Privacy Policy'}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Attributions */}
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
            {/* Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Attributions'}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Rate us */}
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
            {/* Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Rate us'}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Visit Our Website */}
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
            {/* Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Visit Our Website'}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Follow us */}
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
            {/* Title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Follow us on Social Media'}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AboutStreamoScreen);
