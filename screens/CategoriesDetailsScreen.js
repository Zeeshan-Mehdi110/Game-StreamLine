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

const CategoriesDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [selectedtab, setSelectedtab] = React.useState('livechannel');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
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
        {/* Filter */}
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
                navigation.navigate('FilterandSortScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'MaterialCommunityIcons/dots-horizontal-circle-outline'}
              size={24}
            />
          </Touchable>
        </View>
      </View>
      {/* Profile */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: theme.colors['Divider'],
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            paddingTop: 20,
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
            { flex: 1, justifyContent: 'space-between', marginLeft: 16 },
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
          {/* Stats */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginBottom: 15,
                marginTop: 12,
              },
              dimensions.width
            )}
          >
            {'245K viewers • 24.5M Followers'}
          </Text>
          {/* Tags */}
          <ExampleDataApi.FetchUsersGET limit={3}>
            {({ loading, error, data, refetchUsers }) => {
              const tagsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
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
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'HWuj9bh6'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: theme.colors['Light'],
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
                              opacity: 0.75,
                              paddingBottom: 3,
                              paddingLeft: 5,
                              paddingRight: 5,
                              paddingTop: 3,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.firstName}
                        </Text>
                      </View>
                    );
                  }}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
          {/* Unfollow */}
          <Touchable
            style={StyleSheet.applyWidth({ marginTop: 12 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color'],
                  borderLeftWidth: 1,
                  borderRadius: 100,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 32,
                  justifyContent: 'center',
                  width: 130,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_500Medium',
                  },
                  dimensions.width
                )}
              >
                {'Unfollow'}
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
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Live Channels */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(selectedtab === 'livechannel') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: theme.colors['Custom Color'],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 14,
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
            {!(selectedtab !== 'livechannel') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedtab('livechannel');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_21'],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 14,
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
        {/* Videos */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(selectedtab === 'video') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: theme.colors['Custom Color'],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 14,
                      },
                      dimensions.width
                    )}
                  >
                    {'Videos'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(selectedtab !== 'video') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedtab('video');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_21'],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 14,
                      },
                      dimensions.width
                    )}
                  >
                    {'Videos'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Clips */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <>
            {!(selectedtab === 'clips') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: theme.colors['Custom Color'],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 14,
                      },
                      dimensions.width
                    )}
                  >
                    {'Clips'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* unselected */}
          <>
            {!(selectedtab !== 'clips') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_21'],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 14,
                      },
                      dimensions.width
                    )}
                  >
                    {'Clips'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* Live Channels */}
      <>
        {!(selectedtab === 'livechannel') ? null : (
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingBottom: 15 },
              dimensions.width
            )}
          >
            <ExampleDataApi.FetchUsersGET limit={6}>
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
                    data={fetchData}
                    estimatedItemSize={50}
                    keyExtractor={flashListData =>
                      flashListData?.id ||
                      flashListData?.uuid ||
                      JSON.stringify(flashListData)
                    }
                    listKey={'Dvcb3Gby'}
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
                              { flexDirection: 'column', paddingBottom: 4 },
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
                                {/* Details */}
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
                                                    color:
                                                      theme.colors['Strong'],
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
        )}
      </>
      {/* Videos */}
      <>
        {!(selectedtab === 'video') ? null : (
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingBottom: 15 },
              dimensions.width
            )}
          >
            <ExampleDataApi.FetchUsersGET limit={6}>
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
                    data={fetchData}
                    estimatedItemSize={50}
                    keyExtractor={flashListData =>
                      flashListData?.id ||
                      flashListData?.uuid ||
                      JSON.stringify(flashListData)
                    }
                    listKey={'4j8aKQ3d'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
                        <Touchable
                          style={StyleSheet.applyWidth(
                            { marginLeft: 20, marginRight: 20, marginTop: 15 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                height: 80,
                              },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              source={Images.Video}
                              style={StyleSheet.applyWidth(
                                { borderRadius: 16, height: 80, width: 140 },
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, marginLeft: 12 },
                                dimensions.width
                              )}
                            >
                              {/* Name */}
                              <Text
                                numberOfLines={1}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Drop Enabled | Overwatch 2'}
                              </Text>

                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      marginBottom: 10,
                                      marginTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Attackie'}
                                </Text>
                                <Icon
                                  color={theme.colors['Custom Color']}
                                  name={'MaterialIcons/verified'}
                                  size={18}
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 4 },
                                    dimensions.width
                                  )}
                                />
                              </View>
                              {/* Views | timestamp */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Strong'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 11,
                                    opacity: 0.75,
                                    paddingBottom: 3,
                                    paddingRight: 5,
                                    paddingTop: 3,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'4.8M Views • 1 hour ago'}
                              </Text>
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
        )}
      </>
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
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('FilterandSortScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
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

export default withTheme(CategoriesDetailsScreen);
