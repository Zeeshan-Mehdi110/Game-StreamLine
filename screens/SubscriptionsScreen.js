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
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SubscriptionsScreen = props => {
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
          {'Subscriptions'}
        </Text>
      </View>
      {/* Subscriptions */}
      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        {/* Active */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 2,
              borderColor: theme.colors['Divider'],
              paddingBottom: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 20,
              },
              dimensions.width
            )}
          >
            {'ACTIVE'}
          </Text>

          <ExampleDataApi.FetchUsersGET limit={3}>
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
                  listKey={'fVq2e0nm'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 24,
                          },
                          dimensions.width
                        )}
                      >
                        <Circle bgColor={theme.colors.light} size={80}>
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.avatar}` }}
                            style={StyleSheet.applyWidth(
                              { height: 80, width: 80 },
                              dimensions.width
                            )}
                          />
                        </Circle>

                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 14, marginRight: 14 },
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
                            {'TalesWire'}
                          </Text>
                          {/* Detail */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_300Light',
                                fontSize: 13,
                                lineHeight: 21,
                                marginTop: 5,
                              },
                              dimensions.width
                            )}
                          >
                            {
                              'TalesWire 1 month subscriptions Expired on Jan 30, 2023'
                            }
                          </Text>
                          {/* Remove */}
                          <Touchable
                            style={StyleSheet.applyWidth(
                              { marginTop: 10 },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color'],
                                  fontFamily: 'Inter_600SemiBold',
                                },
                                dimensions.width
                              )}
                            >
                              {'Remove'}
                            </Text>
                          </Touchable>
                        </View>
                        {/* Edit */}
                        <Touchable>
                          <Image
                            resizeMode={'cover'}
                            source={Images.Edit}
                            style={StyleSheet.applyWidth(
                              { height: 24, width: 24 },
                              dimensions.width
                            )}
                          />
                        </Touchable>
                      </View>
                    );
                  }}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Expired */}
        <View
          style={StyleSheet.applyWidth({ paddingTop: 20 }, dimensions.width)}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 20,
              },
              dimensions.width
            )}
          >
            {'EXPIRED'}
          </Text>

          <ExampleDataApi.FetchUsersGET limit={3}>
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
                  listKey={'qwXOONmh'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 24,
                          },
                          dimensions.width
                        )}
                      >
                        <Circle bgColor={theme.colors.light} size={80}>
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.avatar}` }}
                            style={StyleSheet.applyWidth(
                              { height: 80, width: 80 },
                              dimensions.width
                            )}
                          />
                        </Circle>

                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 14, marginRight: 14 },
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
                            {'TalesWire'}
                          </Text>
                          {/* Detail */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_300Light',
                                fontSize: 14,
                                marginTop: 5,
                              },
                              dimensions.width
                            )}
                          >
                            {
                              'TalesWire 1 month subscriptions Expired on Jan 30, 2023'
                            }
                          </Text>
                          {/* Actions */}
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            {/* Resubscribe */}
                            <Touchable
                              style={StyleSheet.applyWidth(
                                { marginTop: 10 },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Inter_600SemiBold',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Resubscribe'}
                              </Text>
                            </Touchable>
                            {/* Remove */}
                            <Touchable
                              style={StyleSheet.applyWidth(
                                { marginLeft: 20, marginTop: 10 },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom Color'],
                                    fontFamily: 'Inter_600SemiBold',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Remove'}
                              </Text>
                            </Touchable>
                          </View>
                        </View>
                      </View>
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

export default withTheme(SubscriptionsScreen);
