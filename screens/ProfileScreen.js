import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const ProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [Logout, setLogout] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
            paddingLeft: 24,
            paddingRight: 24,
          },
          dimensions.width
        )}
      >
        {/* Left Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Logo}
            style={StyleSheet.applyWidth(
              { height: 28, width: 28 },
              dimensions.width
            )}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_700Bold',
                fontSize: 20,
                marginLeft: 16,
              },
              dimensions.width
            )}
          >
            {'Account'}
          </Text>
        </View>
        {/* Right Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Notifications */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('NotificationEmptyScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Notifications}
              style={StyleSheet.applyWidth(
                { height: 38, width: 38 },
                dimensions.width
              )}
            />
          </Touchable>
          {/* Create */}
          <Touchable
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Custom Color'],
                  borderLeftWidth: 2,
                  borderRadius: 100,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 38,
                  justifyContent: 'center',
                  width: 115,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom Color']}
                name={'Foundation/sound'}
                size={16}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 5,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Create'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
      {/* User */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: theme.colors['Divider'],
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
            paddingBottom: 24,
            paddingLeft: 24,
            paddingRight: 24,
          },
          dimensions.width
        )}
      >
        {/* Details */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Photoi */}
          <Image
            resizeMode={'cover'}
            source={Images.User}
            style={StyleSheet.applyWidth(
              { height: 80, width: 80 },
              dimensions.width
            )}
          />
          <View>
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 18,
                  marginLeft: 20,
                },
                dimensions.width
              )}
            >
              {'Arvind Limba'}
            </Text>
            {/* Status */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 8,
                },
                dimensions.width
              )}
            >
              {'Offline'}
            </Text>
          </View>
        </View>
        {/* Edit */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UpdateProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
            <Image
              resizeMode={'cover'}
              source={Images.Edit}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        {/* Menu Section 1 */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_4'],
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 24,
            },
            dimensions.width
          )}
        >
          {/* My Channel */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('MyChannelScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconMyChannel}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'My Channel'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Subscriptions */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SubscriptionsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconSubscriptions}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Subscriptions'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Payment Methods */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('PaymentMethodsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconPaymentMethods}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Payment Methods'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
        </View>
        {/* Menu Section 2 */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 24, paddingLeft: 24, paddingRight: 24 },
            dimensions.width
          )}
        >
          {/* Profile */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('UpdateProfileScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconProfile}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Profile'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Notification */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('NotificationSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconNotfications}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Notification'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Preferences */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('PreferencesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconPreferences}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Preferences'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Security */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SeecurityScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconSecurity}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Security'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Language */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LanguageSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Left View */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconLanguages}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Language'}
                </Text>
              </View>
              {/* Right View */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  },
                  dimensions.width
                )}
              >
                {/* Selected Language */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 18,
                      marginRight: 12,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['Language']}
                </Text>
                {/* Arrow Icon */}
                <Icon
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/angle-right'}
                  size={24}
                />
              </View>
            </View>
          </Touchable>
          {/* Dark Mode */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconDarkMode}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Dark Mode'}
                </Text>
              </View>
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
          </Touchable>
          {/* Help Center */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('HelpCenterScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconHelp}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Help Center'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Invite Friends */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('InviteFriendsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconInvite}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Invite Friends'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Community Guidelines */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconCommunity}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Community Guidelines'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Terms of Services */}
          <Touchable
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconTerms}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Terms of Services'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* About Streamo */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('AboutStreamoScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconAbout}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'About Streamo'}
                </Text>
              </View>
              {/* Arrow Icon */}
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/angle-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Logout */}
          <Touchable
            onPress={() => {
              try {
                setLogout(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Item */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                {/* Icon */}
                <Image
                  resizeMode={'cover'}
                  source={Images.IconLogout}
                  style={StyleSheet.applyWidth(
                    { height: 56, width: 56 },
                    dimensions.width
                  )}
                />
                {/* Name */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_3'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Logout'}
                </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
      {/* Logout Modal */}
      <>
        {!Logout ? null : (
          <Modal animationType={'slide'} transparent={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.3,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom #ffffff'],
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  bottom: 0,
                  height: 254,
                  justifyContent: 'space-evenly',
                  left: 0,
                  overflow: 'hidden',
                  paddingBottom: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 15,
                  position: 'absolute',
                  right: 0,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_8'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 21,
                  },
                  dimensions.width
                )}
              >
                {'Logout'}
              </Text>
              <Divider
                color={theme.colors.divider}
                style={StyleSheet.applyWidth(
                  { height: 2, width: '100%' },
                  dimensions.width
                )}
              />
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
                {'Are you sure you want to log out?'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Cancel */}
                <Button
                  onPress={() => {
                    try {
                      setLogout(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_18'],
                      borderRadius: 100,
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      height: 58,
                      textAlign: 'center',
                      width: '47%',
                    },
                    dimensions.width
                  )}
                  title={'Cancel'}
                />
                {/* Yes, Logout */}
                <Button
                  onPress={() => {
                    try {
                      setLogout(false);
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
                      width: '47%',
                    },
                    dimensions.width
                  )}
                  title={'Yes, Logout'}
                />
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
