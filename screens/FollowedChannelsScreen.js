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
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const FollowedChannelsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

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
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Followed Channels'}
        </Text>
        {/* Search */}
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
              name={'AntDesign/search1'}
              size={24}
            />
          </Touchable>
        </View>
      </View>

      <ExampleDataApi.FetchUsersGET limit={8}>
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
              listKey={'q4S24V96'}
              numColumns={1}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: 20, marginRight: 20 },
                      dimensions.width
                    )}
                  >
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('ChannelDetailsScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        { marginTop: 20 },
                        dimensions.width
                      )}
                    >
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

                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 15 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
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
                              {'TalesWire'}
                            </Text>
                            <Icon
                              color={theme.colors['Custom Color']}
                              name={'MaterialIcons/verified'}
                              size={24}
                              style={StyleSheet.applyWidth(
                                { marginLeft: 8 },
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
                                marginTop: 4,
                              },
                              dimensions.width
                            )}
                          >
                            {'265K Followers'}
                          </Text>
                        </View>

                        <Touchable>
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
                                height: 34,
                                justifyContent: 'center',
                                width: 95,
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
                    </Touchable>
                  </View>
                );
              }}
            />
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </ScreenContainer>
  );
};

export default withTheme(FollowedChannelsScreen);
