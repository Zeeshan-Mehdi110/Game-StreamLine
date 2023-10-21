import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
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
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const DashboardScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [selectedTab, setSelectedTab] = React.useState('dashboard');

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
            {'Dashboard'}
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
                navigation.navigate('NotificationListScreen');
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
          {/* Watch */}
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
                {'Watch'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
      {/* Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* tab1 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Dashboard */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab === 'dashboard') ? null : (
                <Touchable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Custom Color'],
                        height: 35,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color'],
                          fontFamily: 'Inter_500Medium',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Dashboard'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'dashboard') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('dashboard');
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
                        borderColor: theme.colors['Light'],
                        height: 35,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Light'],
                          fontFamily: 'Inter_500Medium',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Dashboard'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* tab2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Content */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab === 'content') ? null : (
                <Touchable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Custom Color'],
                        height: 35,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color'],
                          fontFamily: 'Inter_500Medium',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Content'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'content') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('content');
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
                        borderColor: theme.colors['Light'],
                        height: 35,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Light'],
                          fontFamily: 'Inter_500Medium',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Content'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
      </View>
      {/* Dashboard */}
      <>
        {!(selectedTab === 'dashboard') ? null : (
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flex: 1,
                  paddingTop: 50,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Dashboard}
                style={StyleSheet.applyWidth(
                  { height: 210, width: 171 },
                  dimensions.width
                )}
              />
              {/* You're Offline */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_700Bold',
                    fontSize: 28,
                    marginTop: 40,
                  },
                  dimensions.width
                )}
              >
                {'You’re Offline'}
              </Text>
              {/* GO LIVE */}
              <Button
                icon={'Ionicons/videocam'}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.primary,
                    borderRadius: 100,
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 15,
                    height: 58,
                    marginTop: 40,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                title={'  GO LIVE'}
              />
              {/* Edit Stream Info */}
              <Button
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom Color_18'],
                    borderRadius: 100,
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 15,
                    height: 58,
                    marginTop: 25,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                title={'Edit Stream Info'}
              />
            </View>
          </View>
        )}
      </>
      {/* Content */}
      <ExampleDataApi.FetchUsersGET limit={7}>
        {({ loading, error, data, refetchUsers }) => {
          const contentData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {!(selectedTab === 'content') ? null : (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={contentData}
                  estimatedItemSize={50}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'uJXIbmt2'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginBottom: 20, marginLeft: 20, marginRight: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'flex-start',
                              flexDirection: 'row',
                              height: 90,
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            source={Images.Video}
                            style={StyleSheet.applyWidth(
                              { borderRadius: 16, height: 90, width: 160 },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, marginLeft: 16 },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              numberOfLines={2}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 16,
                                },
                                dimensions.width
                              )}
                            >
                              {'Overwatch 2 Gameplay'}
                            </Text>
                            {/* Views | Timestamp */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: 11,
                                  marginBottom: 15,
                                  marginTop: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {'4.8M Views • 1 hour ago'}
                            </Text>
                          </View>
                          {/* 3 dots */}
                          <Touchable>
                            <Icon
                              name={'MaterialCommunityIcons/dots-vertical'}
                              size={24}
                            />
                          </Touchable>
                        </View>
                      </Touchable>
                    );
                  }}
                />
              )}
            </>
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </ScreenContainer>
  );
};

export default withTheme(DashboardScreen);
