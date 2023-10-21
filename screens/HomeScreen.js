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

const HomeScreen = props => {
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
            {'Home'}
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

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Followed Categories */}
        <View>
          {/* heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 10,
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
              {'Followed Categories'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('FollowedCategoriesScreen');
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
                <Icon
                  color={theme.colors['Custom Color']}
                  name={'AntDesign/arrowright'}
                  size={24}
                />
              </View>
            </Touchable>
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
                        { flex: 1, flexDirection: 'row' },
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
                      listKey={'Ckpww82v'}
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
                              { marginLeft: 20, marginTop: 20 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flexDirection: 'column' },
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
                                  { marginTop: 10 },
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
                                  {'Overwatch 2'}
                                </Text>

                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      marginTop: 5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Circle
                                    bgColor={
                                      theme.colors['Peoplebit_Salmon_Red']
                                    }
                                    size={8}
                                  />
                                  {/* viewers */}
                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors.strong,
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: 12,
                                        marginLeft: 10,
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
                  )}
                </>
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Followed Channel */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
        >
          {/* heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                paddingLeft: 20,
                paddingRight: 10,
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
              {'Followed Channel'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('FollowedChannelsScreen');
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
                <Icon
                  color={theme.colors['Custom Color']}
                  name={'AntDesign/arrowright'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
          {/* Channels */}
          <ExampleDataApi.FetchUsersGET limit={7}>
            {({ loading, error, data, refetchUsers }) => {
              const channelsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'row' },
                    dimensions.width
                  )}
                  data={channelsData}
                  estimatedItemSize={50}
                  horizontal={true}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'oona3at3'}
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
                          { marginLeft: 20, marginTop: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'column',
                              height: 90,
                              width: 84,
                            },
                            dimensions.width
                          )}
                        >
                          <>
                            {!(flashListData?.id < 3) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { alignItems: 'center' },
                                  dimensions.width
                                )}
                              >
                                <Circle
                                  bgColor={theme.colors['Custom Color_8']}
                                  size={84}
                                />
                              </View>
                            )}
                          </>
                          <View
                            style={StyleSheet.applyWidth(
                              { left: 2, position: 'absolute', top: 2 },
                              dimensions.width
                            )}
                          >
                            <Circle bgColor={theme.colors.light} size={80}>
                              <Image
                                resizeMode={'cover'}
                                source={Images.Games}
                                style={StyleSheet.applyWidth(
                                  { borderRadius: 16, height: 80, width: 80 },
                                  dimensions.width
                                )}
                              />
                            </Circle>
                          </View>
                          <>
                            {!(flashListData?.id < 3) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    backgroundColor:
                                      theme.colors['Custom Color_8'],
                                    borderRadius: 6,
                                    height: 24,
                                    justifyContent: 'center',
                                    top: -14,
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
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'LIVE'}
                                </Text>
                              </View>
                            )}
                          </>
                        </View>
                      </Touchable>
                    );
                  }}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Recommended For You */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 10, paddingLeft: 20, paddingRight: 10 },
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
              {'Recommended For You'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('RecommendedScreen');
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
                <Icon
                  color={theme.colors['Custom Color']}
                  name={'AntDesign/arrowright'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>

          <ExampleDataApi.FetchUsersGET limit={5}>
            {({ loading, error, data, refetchUsers }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'column' },
                    dimensions.width
                  )}
                  data={fetchData}
                  estimatedItemSize={50}
                  horizontal={false}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'p5QCJgjJ'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginTop: 20 },
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
                              { flex: 1, marginLeft: 12 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'center', flexDirection: 'row' },
                                dimensions.width
                              )}
                            >
                              <Circle bgColor={theme.colors.light} size={24}>
                                <Image
                                  resizeMode={'cover'}
                                  source={{ uri: `${flashListData?.avatar}` }}
                                  style={StyleSheet.applyWidth(
                                    { height: 24, width: 24 },
                                    dimensions.width
                                  )}
                                />
                              </Circle>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 17,
                                    marginLeft: 6,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'InAdventure'}
                              </Text>
                            </View>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_300Light',
                                  fontSize: 12,
                                  marginBottom: 15,
                                  marginTop: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {'Aleyang VS Storyzast'}
                            </Text>

                            <ExampleDataApi.FetchUsersGET limit={2}>
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
                                                fontSize: 11,
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
                      </Touchable>
                    );
                  }}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Continue Watching */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 10, paddingLeft: 20, paddingRight: 20 },
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
              {'Continue Watching'}
            </Text>

            <Touchable>
              <Icon
                color={theme.colors['Custom Color']}
                name={'AntDesign/arrowright'}
                size={24}
              />
            </Touchable>
          </View>

          <ExampleDataApi.FetchUsersGET limit={5}>
            {({ loading, error, data, refetchUsers }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1, flexDirection: 'column' },
                    dimensions.width
                  )}
                  data={fetchData}
                  estimatedItemSize={50}
                  horizontal={false}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'JbaXsBxu'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginTop: 20 },
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
                              { flex: 1, marginLeft: 12 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'center', flexDirection: 'row' },
                                dimensions.width
                              )}
                            >
                              <Circle bgColor={theme.colors.light} size={24}>
                                <Image
                                  resizeMode={'cover'}
                                  source={{ uri: `${flashListData?.avatar}` }}
                                  style={StyleSheet.applyWidth(
                                    { height: 24, width: 24 },
                                    dimensions.width
                                  )}
                                />
                              </Circle>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 17,
                                    marginLeft: 6,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'InAdventure'}
                              </Text>
                            </View>

                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_300Light',
                                  fontSize: 12,
                                  marginBottom: 15,
                                  marginTop: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {'Aleyang VS Storyzast'}
                            </Text>

                            <ExampleDataApi.FetchUsersGET limit={2}>
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
                                                fontSize: 11,
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

export default withTheme(HomeScreen);
