import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  TextInput,
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

const SearchResultsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [SelectedTab, setSelectedTab] = React.useState('channel');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 10,
          },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
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
              name={'AntDesign/arrowleft'}
              size={24}
              style={StyleSheet.applyWidth({ opacity: 0.7 }, dimensions.width)}
            />
          </View>
        </Touchable>
        {/* Search bar */}
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
              flex: 1,
              flexDirection: 'row',
              height: 56,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 20,
              marginTop: 12,
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
            <TextInput
              defaultValue={'Game'}
              editable={true}
              placeholder={'Search'}
              placeholderTextColor={theme.colors['Custom Color_21']}
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.divider,
                  borderRadius: 8,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>

          <Touchable>
            <Icon
              color={theme.colors['Custom Color']}
              name={'FontAwesome/microphone'}
              size={20}
            />
          </Touchable>
        </View>
      </View>
      {/* Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Channels */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Selected */}
          <>
            {!(SelectedTab === 'channel') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 30,
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
                    {'Channels'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Unselected */}
          <>
            {!(SelectedTab !== 'channel') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('channel');
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
                      borderColor: theme.colors['Custom Color_21'],
                      height: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Channels'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Categories */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Selected */}
          <>
            {!(SelectedTab === 'category') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 30,
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
          {/* Unselected */}
          <>
            {!(SelectedTab !== 'category') ? null : (
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
                      borderColor: theme.colors['Custom Color_21'],
                      height: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
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
        {/* Videos */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Selected */}
          <>
            {!(SelectedTab === 'video') ? null : (
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 3,
                      borderColor: theme.colors['Custom Color'],
                      height: 30,
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
                    {'Videos'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Unselected */}
          <>
            {!(SelectedTab !== 'video') ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedTab('video');
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
                      borderColor: theme.colors['Custom Color_21'],
                      height: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_21'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
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
      </View>
      {/* Channels */}
      <>
        {!(SelectedTab === 'channel') ? null : (
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <ExampleDataApi.FetchUsersGET limit={7}>
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
                    listKey={'vzMfW6FZ'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
                        <Touchable
                          style={StyleSheet.applyWidth(
                            { marginTop: 16 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: 20,
                                marginRight: 20,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'center', height: 94, width: 94 },
                                dimensions.width
                              )}
                            >
                              {/* Red border */}
                              <>
                                {!(flashListData?.id < 3) ? null : (
                                  <Circle
                                    bgColor={theme.colors['Custom Color_8']}
                                    size={94}
                                  />
                                )}
                              </>
                              <View
                                style={StyleSheet.applyWidth(
                                  { left: 2, position: 'absolute', top: 2 },
                                  dimensions.width
                                )}
                              >
                                <Circle bgColor={theme.colors.light} size={90}>
                                  <Image
                                    resizeMode={'cover'}
                                    source={{ uri: `${flashListData?.avatar}` }}
                                    style={StyleSheet.applyWidth(
                                      { height: 90, width: 90 },
                                      dimensions.width
                                    )}
                                  />
                                </Circle>
                              </View>
                              {/* Live tag */}
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

                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, paddingLeft: 8 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginBottom: 8,
                                  },
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
                                  {'Gamesta'}
                                </Text>
                                <Icon
                                  color={theme.colors['Custom Color']}
                                  name={'MaterialIcons/verified'}
                                  size={24}
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 4 },
                                    dimensions.width
                                  )}
                                />
                              </View>

                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 13,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'478K Followers'}
                              </Text>
                            </View>

                            <View>
                              <Touchable>
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      backgroundColor:
                                        theme.colors['Custom Color'],
                                      borderRadius: 100,
                                      flexDirection: 'row',
                                      height: 38,
                                      justifyContent: 'center',
                                      width: 100,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    color={theme.colors['Custom #ffffff']}
                                    name={'Entypo/add-user'}
                                    size={16}
                                  />
                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors['Custom #ffffff'],
                                        fontFamily: 'Inter_500Medium',
                                        marginLeft: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Follow'}
                                  </Text>
                                </View>
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
      {/* Categories */}
      <>
        {!(SelectedTab === 'category') ? null : (
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <ExampleDataApi.FetchUsersGET limit={7}>
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
                    listKey={'bOTsGPet'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
                        <Touchable
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
                                {
                                  marginLeft: 16,
                                  paddingBottom: 10,
                                  paddingTop: 10,
                                },
                                dimensions.width
                              )}
                            >
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

                              <ExampleDataApi.FetchUsersGET limit={3}>
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
                                                  fontFamily:
                                                    'Inter_400Regular',
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
        {!(SelectedTab === 'video') ? null : (
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <ExampleDataApi.FetchUsersGET limit={7}>
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
                    listKey={'VntF8LGE'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
                        <Touchable
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
                                height: 90,
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
                              {/* name */}
                              <Text
                                numberOfLines={1}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 18,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Drop Enabled | Overw...'}
                              </Text>
                              {/* Channel */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginBottom: 12,
                                    marginTop: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Spoorge'}
                                </Text>
                                <Icon
                                  color={theme.colors['Custom Color']}
                                  name={'MaterialIcons/verified'}
                                  size={18}
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 5 },
                                    dimensions.width
                                  )}
                                />
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {' • Overwatch 2'}
                                </Text>
                              </View>
                              {/* Views */}
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
    </ScreenContainer>
  );
};

export default withTheme(SearchResultsScreen);
