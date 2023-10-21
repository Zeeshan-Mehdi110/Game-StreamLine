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
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const DiscoverScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

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
            marginBottom: 10,
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
            {'Discover'}
          </Text>
        </View>
        {/* Right Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Notification */}
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
      {/* Search */}
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
            height: 56,
            marginBottom: 8,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 8,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['Custom Color_21']}
          name={'EvilIcons/search'}
          size={24}
        />
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'center',
              marginLeft: 5,
              marginRight: 5,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SearchScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_21'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 13,
                  letterSpacing: 0.2,
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Search games, categories, or videos'}
            </Text>
          </Touchable>
        </View>
      </View>

      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
      >
        {/* Top Trending */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Live Channels */}
          <ExampleDataApi.FetchUsersGET limit={7}>
            {({ loading, error, data, refetchUsers }) => {
              const liveChannelsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={liveChannelsData}
                  estimatedItemSize={50}
                  horizontal={true}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'iMGzt2aR'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          {
                            marginLeft: 20,
                            marginRight: 8,
                            marginTop: 12,
                            width: '100%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'column',
                              paddingBottom: 4,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { width: '100%' },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              source={Images.LastStream}
                              style={StyleSheet.applyWidth(
                                { borderRadius: 16, height: 215, width: 320 },
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
                        </View>
                      </Touchable>
                    );
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '100%' },
                    dimensions.width
                  )}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Tags */}
        <ScrollView
          bounces={true}
          contentContainerStyle={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 15,
              paddingLeft: 20,
            },
            dimensions.width
          )}
          horizontal={true}
          showsVerticalScrollIndicator={true}
        >
          <Touchable
            style={StyleSheet.applyWidth({ marginRight: 16 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 100,
                  flexDirection: 'row',
                  height: 35,
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'Ionicons/game-controller'}
                size={16}
                style={StyleSheet.applyWidth(
                  { marginRight: 6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                  },
                  dimensions.width
                )}
              >
                {'Games'}
              </Text>
            </View>
          </Touchable>

          <Touchable
            style={StyleSheet.applyWidth({ marginRight: 16 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 100,
                  flexDirection: 'row',
                  height: 35,
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'FontAwesome/user'}
                size={16}
                style={StyleSheet.applyWidth(
                  { marginRight: 6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                  },
                  dimensions.width
                )}
              >
                {'IRL'}
              </Text>
            </View>
          </Touchable>

          <Touchable
            style={StyleSheet.applyWidth({ marginRight: 16 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 100,
                  flexDirection: 'row',
                  height: 35,
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'Foundation/microphone'}
                size={16}
                style={StyleSheet.applyWidth(
                  { marginRight: 6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                  },
                  dimensions.width
                )}
              >
                {'Music'}
              </Text>
            </View>
          </Touchable>

          <Touchable
            style={StyleSheet.applyWidth({ marginRight: 16 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 100,
                  flexDirection: 'row',
                  height: 35,
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'Entypo/creative-commons-attribution'}
                size={16}
                style={StyleSheet.applyWidth(
                  { marginRight: 6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                  },
                  dimensions.width
                )}
              >
                {'Creative'}
              </Text>
            </View>
          </Touchable>
        </ScrollView>
        {/* Live Channels You May Like */}
        <View style={StyleSheet.applyWidth({ marginTop: 8 }, dimensions.width)}>
          {/* heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 20,
                marginRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                },
                dimensions.width
              )}
            >
              {'Live Channels You May Like'}
            </Text>

            <Touchable>
              <Icon
                color={theme.colors['Custom Color']}
                name={'AntDesign/arrowright'}
                size={24}
              />
            </Touchable>
          </View>
          {/* Live Channels */}
          <ExampleDataApi.FetchUsersGET limit={6}>
            {({ loading, error, data, refetchUsers }) => {
              const liveChannelsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={liveChannelsData}
                  estimatedItemSize={50}
                  horizontal={true}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'rENSieNX'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginTop: 20, width: '100%' },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'column',
                              marginLeft: 20,
                              marginRight: 8,
                              paddingBottom: 4,
                            },
                            dimensions.width
                          )}
                        >
                          <View>
                            <Image
                              resizeMode={'cover'}
                              source={Images.LastStream}
                              style={StyleSheet.applyWidth(
                                { borderRadius: 16, height: 215, width: 320 },
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
                                source={Images.User}
                                style={StyleSheet.applyWidth(
                                  { height: 60, width: 60 },
                                  dimensions.width
                                )}
                              />
                            </Circle>

                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, marginLeft: 16, paddingBottom: 16 },
                                dimensions.width
                              )}
                            >
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
                                {'Animationitda'}
                              </Text>

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

                              <ExampleDataApi.FetchUsersGET limit={4}>
                                {({ loading, error, data, refetchUsers }) => {
                                  const fetchData = data?.json;
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
                                      data={fetchData}
                                      horizontal={true}
                                      keyExtractor={listData =>
                                        listData?.id ||
                                        listData?.uuid ||
                                        JSON.stringify(listData)
                                      }
                                      listKey={JSON.stringify(fetchData)}
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
                                                marginBottom: 10,
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
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Category You May Like */}
        <View>
          {/* heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                },
                dimensions.width
              )}
            >
              {'Categories You May Like'}
            </Text>

            <Touchable>
              <Icon
                color={theme.colors['Custom Color']}
                name={'AntDesign/arrowright'}
                size={24}
              />
            </Touchable>
          </View>
          {/* Categories */}
          <ExampleDataApi.FetchUsersGET limit={6}>
            {({ loading, error, data, refetchUsers }) => {
              const categoriesData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={categoriesData}
                  estimatedItemSize={50}
                  horizontal={true}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'DWNhaXpI'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'column',
                              overflow: 'hidden',
                              width: 120,
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
                          <View>
                            {/* Name */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 16,
                                  marginTop: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {'Overwatch 2'}
                            </Text>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  marginTop: 6,
                                },
                                dimensions.width
                              )}
                            >
                              <Circle
                                bgColor={theme.colors['Custom Color_8']}
                                size={8}
                              />
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    marginLeft: 5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'245K viewers'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Recommended Overwatch 2 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 12 }, dimensions.width)}
        >
          {/* heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 20,
                marginRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                },
                dimensions.width
              )}
            >
              {'Recommended Overwatch 2 '}
            </Text>

            <Touchable>
              <Icon
                color={theme.colors['Custom Color']}
                name={'AntDesign/arrowright'}
                size={24}
              />
            </Touchable>
          </View>
          {/* recommended */}
          <ExampleDataApi.FetchUsersGET limit={6}>
            {({ loading, error, data, refetchUsers }) => {
              const recommendedData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={recommendedData}
                  estimatedItemSize={50}
                  horizontal={true}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'zDXB4ajS'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20, marginRight: 8, marginTop: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'column',
                              paddingBottom: 4,
                              width: 330,
                            },
                            dimensions.width
                          )}
                        >
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
                                alignItems: 'flex-start',
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
                                source={Images.User}
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
                                {'Animationitda'}
                              </Text>

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
                  style={StyleSheet.applyWidth(
                    { width: '100%' },
                    dimensions.width
                  )}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Recently Released Games */}
        <View
          style={StyleSheet.applyWidth(
            { marginBottom: 25, marginTop: 12 },
            dimensions.width
          )}
        >
          {/* heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                },
                dimensions.width
              )}
            >
              {'Recently Released Games'}
            </Text>

            <Touchable>
              <Icon
                color={theme.colors['Custom Color']}
                name={'AntDesign/arrowright'}
                size={24}
              />
            </Touchable>
          </View>
          {/* Categories */}
          <ExampleDataApi.FetchUsersGET limit={6}>
            {({ loading, error, data, refetchUsers }) => {
              const categoriesData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={categoriesData}
                  estimatedItemSize={50}
                  horizontal={true}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'iZbNFVse'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'column',
                              overflow: 'hidden',
                              width: 120,
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
                        </View>
                      </Touchable>
                    );
                  }}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(DiscoverScreen);
