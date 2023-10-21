import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const PreferencesScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);

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
          {'Preferences'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Audio Background */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 24 }, dimensions.width)}
        >
          {/* Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Audio Background'}
          </Text>
          {/* Description */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                lineHeight: 24,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            {
              'Allow your stream to continue playing audio when you background the app'
            }
          </Text>

          <Touchable
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color_4'],
                  borderRadius: 16,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {'Always'}
              </Text>
              <Icon name={'Ionicons/ios-caret-down'} size={18} />
            </View>
          </Touchable>
        </View>
        {/* Video Autoplaying */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 24 }, dimensions.width)}
        >
          {/* Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Video Autoplaying'}
          </Text>
          {/* Description */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                lineHeight: 24,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            {'Choose when videos should play automacatically'}
          </Text>

          <Touchable
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color_4'],
                  borderRadius: 16,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {'Mobile Data & Wi-Fi'}
              </Text>
              <Icon name={'Ionicons/ios-caret-down'} size={18} />
            </View>
          </Touchable>
        </View>
        {/* Automatically Pop-up Player */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-between',
              marginBottom: 20,
              marginTop: 24,
            },
            dimensions.width
          )}
        >
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Automatically Pop-up Player'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
          />
        </View>
        <Divider
          color={theme.colors.divider}
          style={StyleSheet.applyWidth(
            { height: 1, marginBottom: 20, width: '100%' },
            dimensions.width
          )}
        />
        {/* Clear Cache */}
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
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Clear Cache'}
            </Text>
            {/* Arrow Icon */}
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Storage */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
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
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Storage'}
            </Text>
            {/* Arrow Icon */}
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'FontAwesome/angle-right'}
              size={24}
            />
          </View>
        </Touchable>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PreferencesScreen);
