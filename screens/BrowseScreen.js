import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const BrowseScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [selectedTab, setSelectedTab] = React.useState('category');

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
            {'Browse'}
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
      {/* Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
          {/* Categories */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab === 'category') ? null : (
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
                      {'Categories'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'category') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('category');
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
                      {'Categories'}
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
          {/* Live Channels */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab !== 'category') ? null : (
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
                      {'Live Channels'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab === 'category') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('channels');
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
                      {'Live Channels'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
      </View>
      {/* Categories */}
      <ExampleDataApi.FetchUsersGET limit={8}>
        {({ loading, error, data, refetchUsers }) => {
          const categoriesData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {!(selectedTab === 'category') ? null : (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={categoriesData}
                  estimatedItemSize={50}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'aCyt3jf9'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('CategoriesDetailsScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20, marginRight: 20, marginTop: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              height: 160,
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            source={Images.Games}
                            style={StyleSheet.applyWidth(
                              { borderRadius: 16, height: 160, width: 120 },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { justifyContent: 'center', marginLeft: 12 },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 20,
                                },
                                dimensions.width
                              )}
                            >
                              {'Overwatch 2'}
                            </Text>
                            {/* viewers */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_400Regular',
                                  marginBottom: 15,
                                  marginTop: 15,
                                },
                                dimensions.width
                              )}
                            >
                              {'245K viewers'}
                            </Text>
                            {/* Tags */}
                            <ExampleDataApi.FetchUsersGET limit={3}>
                              {({ loading, error, data, refetchUsers }) => {
                                const tagsData = data?.json;
                                if (loading) {
                                  return <ActivityIndicator />;
                                }

                                if (
                                  error ||
                                  data?.status < 200 ||
                                  data?.status >= 300
                                ) {
                                  return <ActivityIndicator />;
                                }

                                return (
                                  <FlatList
                                    contentContainerStyle={StyleSheet.applyWidth(
                                      { flexDirection: 'row' },
                                      dimensions.width
                                    )}
                                    data={tagsData}
                                    horizontal={true}
                                    keyExtractor={listData =>
                                      listData?.id ||
                                      listData?.uuid ||
                                      JSON.stringify(listData)
                                    }
                                    listKey={JSON.stringify(tagsData)}
                                    numColumns={1}
                                    renderItem={({ item }) => {
                                      const listData = item;
                                      return (
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              borderBottomWidth: 1,
                                              borderColor:
                                                theme.colors['Light'],
                                              borderLeftWidth: 1,
                                              borderRadius: 6,
                                              borderRightWidth: 1,
                                              borderTopWidth: 1,
                                              height: 20,
                                              justifyContent: 'center',
                                              marginRight: 7,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Text
                                            style={StyleSheet.applyWidth(
                                              {
                                                color: theme.colors['Strong'],
                                                fontFamily: 'Inter_400Regular',
                                                fontSize: 12,
                                                lineHeight: 20,
                                                opacity: 0.75,
                                                paddingBottom: 3,
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                paddingTop: 3,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {flashListData?.firstName}
                                          </Text>
                                        </View>
                                      );
                                    }}
                                  />
                                );
                              }}
                            </ExampleDataApi.FetchUsersGET>
                          </View>
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
      {/* Live Channels */}
      <ExampleDataApi.FetchUsersGET limit={8}>
        {({ loading, error, data, refetchUsers }) => {
          const liveChannelsData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {!(selectedTab !== 'category') ? null : (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={liveChannelsData}
                  estimatedItemSize={50}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'aDMFRfv5'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ChannelDetailsScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20, marginRight: 20, marginTop: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'column' },
                            dimensions.width
                          )}
                        >
                          <View>
                            <Image
                              resizeMode={'cover'}
                              source={Images.LastStream}
                              style={StyleSheet.applyWidth(
                                { borderRadius: 16, height: 215 },
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  backgroundColor:
                                    theme.colors['Custom Color_8'],
                                  borderRadius: 6,
                                  height: 24,
                                  justifyContent: 'center',
                                  left: 20,
                                  position: 'absolute',
                                  top: 20,
                                  width: 41,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom #ffffff'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    paddingBottom: 4,
                                    paddingTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'LIVE'}
                              </Text>
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  backgroundColor:
                                    theme.colors['Custom Color_2'],
                                  borderRadius: 6,
                                  bottom: 20,
                                  height: 24,
                                  justifyContent: 'center',
                                  left: 20,
                                  position: 'absolute',
                                  width: 90,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom #ffffff'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    paddingBottom: 4,
                                    paddingTop: 4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9.4K Viewers'}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Circle bgColor={theme.colors.light} size={60}>
                              <Image
                                resizeMode={'cover'}
                                source={{ uri: `${flashListData?.avatar}` }}
                                style={StyleSheet.applyWidth(
                                  { height: 60, width: 60 },
                                  dimensions.width
                                )}
                              />
                            </Circle>

                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, marginLeft: 16 },
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
                                {flashListData?.twitterHandle}
                                {' Animationitda'}
                              </Text>
                              {/* Description */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    marginBottom: 10,
                                    marginTop: 10,
                                    opacity: 0.8,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Drops Enabled - 10H+ Streams Valoran...'}
                              </Text>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    marginBottom: 10,
                                    opacity: 0.8,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Valorant'}
                              </Text>
                              {/* tags */}
                              <ExampleDataApi.FetchUsersGET limit={4}>
                                {({ loading, error, data, refetchUsers }) => {
                                  const tagsData = data?.json;
                                  if (loading) {
                                    return <ActivityIndicator />;
                                  }

                                  if (
                                    error ||
                                    data?.status < 200 ||
                                    data?.status >= 300
                                  ) {
                                    return <ActivityIndicator />;
                                  }

                                  return (
                                    <FlatList
                                      contentContainerStyle={StyleSheet.applyWidth(
                                        { flexDirection: 'row' },
                                        dimensions.width
                                      )}
                                      data={tagsData}
                                      horizontal={true}
                                      keyExtractor={listData =>
                                        listData?.id ||
                                        listData?.uuid ||
                                        JSON.stringify(listData)
                                      }
                                      listKey={JSON.stringify(tagsData)}
                                      numColumns={1}
                                      renderItem={({ item }) => {
                                        const listData = item;
                                        return (
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                alignItems: 'center',
                                                borderBottomWidth: 1,
                                                borderColor:
                                                  theme.colors['Light'],
                                                borderLeftWidth: 1,
                                                borderRadius: 6,
                                                borderRightWidth: 1,
                                                borderTopWidth: 1,
                                                justifyContent: 'center',
                                                marginRight: 7,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            <Text
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color: theme.colors['Strong'],
                                                  fontFamily:
                                                    'Inter_400Regular',
                                                  fontSize: 12,
                                                  opacity: 0.75,
                                                  paddingBottom: 3,
                                                  paddingLeft: 5,
                                                  paddingRight: 5,
                                                  paddingTop: 3,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {flashListData?.firstName}
                                            </Text>
                                          </View>
                                        );
                                      }}
                                    />
                                  );
                                }}
                              </ExampleDataApi.FetchUsersGET>
                            </View>
                            {/* 3 dots */}
                            <Touchable>
                              <Icon
                                name={'MaterialCommunityIcons/dots-vertical'}
                                size={24}
                              />
                            </Touchable>
                          </View>
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
      {/* Filter & Sort */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            bottom: 20,
            justifyContent: 'center',
            left: 0,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 100,
                flexDirection: 'row',
                height: 45,
                justifyContent: 'center',
                width: 176,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom #ffffff']}
              name={'MaterialIcons/tune'}
              size={24}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom #ffffff'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Filter & Sort'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(BrowseScreen);
