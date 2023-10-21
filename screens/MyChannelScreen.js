import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const MyChannelScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [optionsMenu, setOptionsMenu] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('home');

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
        {/* Left View */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
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
            {'My Channel'}
          </Text>
        </View>
        {/* Right View */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* Share */}
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
            <Touchable>
              <Icon
                color={theme.colors['Custom Color_21']}
                name={'FontAwesome/send'}
                size={20}
              />
            </Touchable>
          </View>
          {/* Menu */}
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
                  setOptionsMenu(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                color={theme.colors['Custom Color_21']}
                name={'MaterialCommunityIcons/dots-horizontal-circle-outline'}
                size={24}
              />
            </Touchable>
          </View>
        </View>
      </View>
      {/* Container */}
      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Banner */}
        <View>
          {/* Banner */}
          <Image
            resizeMode={'cover'}
            source={Images.Banner}
            style={StyleSheet.applyWidth(
              { borderRadius: 20, height: 140 },
              dimensions.width
            )}
          />
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await openImagePickerUtil({
                    mediaTypes: 'All',
                    allowsEditing: false,
                    quality: 0.2,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  bottom: 5,
                  height: 48,
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 5,
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'MaterialIcons/edit'}
                size={24}
              />
            </View>
          </Touchable>
        </View>
        {/* Channel Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await openImagePickerUtil({
                    mediaTypes: 'All',
                    allowsEditing: false,
                    quality: 0.2,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View>
              <Image
                resizeMode={'cover'}
                source={Images.User}
                style={StyleSheet.applyWidth(
                  { height: 80, width: 80 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color'],
                    borderRadius: 4,
                    bottom: 0,
                    height: 22,
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 0,
                    width: 22,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom #ffffff']}
                  name={'MaterialIcons/edit'}
                  size={12}
                />
              </View>
            </View>
          </Touchable>

          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 16 },
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
              {'AndrewAinsley'}
            </Text>
            {/* Status */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginTop: 5,
                },
                dimensions.width
              )}
            >
              {'Offline'}
            </Text>
          </View>
          {/* Edit */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('EditChannelProfileScreen');
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
                  paddingLeft: 15,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom #ffffff']}
                name={'AntDesign/edit'}
                size={15}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_500Medium',
                    paddingBottom: 8,
                    paddingLeft: 10,
                    paddingRight: 15,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'Edit'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* About */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              lineHeight: 21,
            },
            dimensions.width
          )}
        >
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
          }
        </Text>
        {/* Social Channels */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: 15,
              paddingTop: 15,
            },
            dimensions.width
          )}
        >
          {/* discord */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync('https://discord.com/');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth({ marginRight: 10 }, dimensions.width)}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Discord}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </Touchable>
          {/* Youtube */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.youtube.com/c/draftbit'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Yt}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </Touchable>
          {/* twitter */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://twitter.com/draftbit'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Twtr}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </Touchable>
          {/* Instagram */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.instagram.com/draftbit/?hl=en'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Ig}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </Touchable>
          {/* facebook */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.facebook.com/'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Fb}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </Touchable>
          {/* telegram */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync('https://telegram.org/');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Telgrm}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </Touchable>
        </View>
        {/* Tabs */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', marginTop: 10 },
            dimensions.width
          )}
        >
          {/* Home */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab === 'home') ? null : (
                <Touchable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
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
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Home'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'home') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('home');
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
                        flex: 1,
                        paddingBottom: 10,
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
                      {'Home'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* About */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab === 'about') ? null : (
                <Touchable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Custom Color'],
                        flex: 1,
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
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'About'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'about') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('about');
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
                        flex: 1,
                        paddingBottom: 10,
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
                      {'About'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* Schedule */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* selected */}
            <>
              {!(selectedTab === 'schedule') ? null : (
                <Touchable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Custom Color'],
                        flex: 1,
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
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Schedule'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'schedule') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('schedule');
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
                        flex: 1,
                        paddingBottom: 10,
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
                      {'Schedule'}
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
              {!(selectedTab === 'video') ? null : (
                <Touchable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Custom Color'],
                        flex: 1,
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
            {/* unselected */}
            <>
              {!(selectedTab !== 'video') ? null : (
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
                        borderColor: theme.colors['Light'],
                        flex: 1,
                        paddingBottom: 10,
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
                      {'Videos'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Home */}
        <>
          {!(selectedTab === 'home') ? null : (
            <View>
              {/* Last Stream */}
              <View>
                {/* heading */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
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
                    {'Your Last Stream'}
                  </Text>

                  <Touchable>
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'AntDesign/arrowright'}
                      size={24}
                    />
                  </Touchable>
                </View>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('LiveStreamScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.LastStream}
                    style={StyleSheet.applyWidth(
                      { borderRadius: 20, height: 215 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
              {/* Followed Categories */}
              <View
                style={StyleSheet.applyWidth(
                  { paddingBottom: 20 },
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
                    {'Categories You Followed'}
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
                          { flex: 1 },
                          dimensions.width
                        )}
                        data={fetchData}
                        estimatedItemSize={50}
                        horizontal={true}
                        keyExtractor={flashListData =>
                          flashListData?.id ||
                          flashListData?.uuid ||
                          JSON.stringify(flashListData)
                        }
                        listKey={'nmFRC3iJ'}
                        numColumns={1}
                        renderItem={({ item }) => {
                          const flashListData = item;
                          return (
                            <Touchable
                              style={StyleSheet.applyWidth(
                                { marginRight: 20 },
                                dimensions.width
                              )}
                            >
                              <View>
                                <Image
                                  resizeMode={'cover'}
                                  source={Images.LastStream}
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderRadius: 16,
                                      height: 160,
                                      width: 120,
                                    },
                                    dimensions.width
                                  )}
                                />
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 16,
                                      marginTop: 12,
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
                                      marginTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'245K viewers'}
                                </Text>
                              </View>
                            </Touchable>
                          );
                        }}
                      />
                    );
                  }}
                </ExampleDataApi.FetchUsersGET>
              </View>
            </View>
          )}
        </>
        {/* About */}
        <>
          {!(selectedTab === 'about') ? null : (
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 20, paddingTop: 15 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    lineHeight: 21,
                    marginBottom: 15,
                    opacity: 1,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'Description'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    lineHeight: 21,
                    opacity: 0.7,
                  },
                  dimensions.width
                )}
              >
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              </Text>
            </View>
          )}
        </>
        {/* Schedule */}
        <>
          {!(selectedTab === 'schedule') ? null : (
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 20, paddingTop: 15 },
                dimensions.width
              )}
            >
              {/* Top View */}
              <View
                style={StyleSheet.applyWidth(
                  { marginBottom: 10 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      lineHeight: 21,
                      marginBottom: 15,
                      opacity: 1,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Now Streams'}
                </Text>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('LiveStreamScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
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
                          backgroundColor: theme.colors['Custom Color_8'],
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
                          backgroundColor: theme.colors['Custom Color_2'],
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
                </Touchable>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                      lineHeight: 21,
                      marginBottom: 10,
                      marginTop: 15,
                      opacity: 1,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Drops Enable Overwatch 2 Gameplay'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 14,
                      lineHeight: 21,
                      marginBottom: 15,
                      opacity: 1,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Overwatch 2 • Now'}
                </Text>
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
                        { flex: 1 },
                        dimensions.width
                      )}
                      data={fetchData}
                      estimatedItemSize={50}
                      keyExtractor={flashListData =>
                        flashListData?.id ||
                        flashListData?.uuid ||
                        JSON.stringify(flashListData)
                      }
                      listKey={'TwkoCmbf'}
                      numColumns={1}
                      renderItem={({ item }) => {
                        const flashListData = item;
                        return (
                          <Touchable
                            style={StyleSheet.applyWidth(
                              { marginBottom: 20, marginTop: 5 },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 18,
                                  marginBottom: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {'Saturday, December 22'}
                            </Text>

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
                                  { marginLeft: 16 },
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
                                      marginTop: 18,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Contest: Scannon VS Gynyield'}
                                </Text>

                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      marginTop: 18,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'17:00'}
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
        {/* Videos */}
        <>
          {!(selectedTab === 'video') ? null : (
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingBottom: 15 },
                dimensions.width
              )}
            >
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
                      listKey={'oTW7LCeB'}
                      numColumns={1}
                      renderItem={({ item }) => {
                        const flashListData = item;
                        return (
                          <Touchable
                            style={StyleSheet.applyWidth(
                              { marginTop: 15 },
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
                                  {'Overwatch 2 Gameplay'}
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
                                        fontSize: 13,
                                        marginBottom: 10,
                                        marginTop: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'TalesWire'}
                                  </Text>
                                  <Icon
                                    color={theme.colors['Custom Color']}
                                    name={'MaterialIcons/verified'}
                                    size={20}
                                    style={StyleSheet.applyWidth(
                                      { marginLeft: 6 },
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
      </ScrollView>
      {/* Go Live */}
      <View
        style={StyleSheet.applyWidth(
          { bottom: 25, position: 'absolute', right: 25 },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('GoLiveScreen');
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
                width: 140,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom #ffffff']}
              name={'Ionicons/ios-videocam'}
              size={20}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom #ffffff'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Go Live'}
            </Text>
          </View>
        </Touchable>
      </View>
      {/* OptionsMenu */}
      <>
        {!optionsMenu ? null : (
          <ActionSheet visible={true}>
            {/* Send Message */}
            <ActionSheetItem
              color={theme.colors.strong}
              label={'Send Message'}
              onPress={() => {
                try {
                  setOptionsMenu(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { textAlign: 'center' },
                dimensions.width
              )}
            />
            {/* Report TalesWire */}
            <ActionSheetItem
              color={theme.colors.strong}
              label={'Report TalesWire'}
              onPress={() => {
                try {
                  setOptionsMenu(false);
                  navigation.navigate('ReportChannelScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { textAlign: 'center' },
                dimensions.width
              )}
            />
            {/* Cancel */}
            <ActionSheetCancel
              label={'Cancel'}
              onPress={() => {
                try {
                  setOptionsMenu(false);
                } catch (err) {
                  console.error(err);
                }
              }}
            />
          </ActionSheet>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(MyChannelScreen);
