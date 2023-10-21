import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
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

const FollowedCategoriesScreen = props => {
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
          {'Followed Categories'}
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
              name={'Feather/search'}
              size={24}
            />
          </Touchable>
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
            <FlashList
              data={categoriesData}
              estimatedItemSize={50}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'ySiaCPOx'}
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
                      <View>
                        <Image
                          resizeMode={'cover'}
                          source={Images.Games}
                          style={StyleSheet.applyWidth(
                            { borderRadius: 16, height: 160, width: 120 },
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Details */}
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
                              fontSize: 20,
                            },
                            dimensions.width
                          )}
                        >
                          {'Overwatch 2'}
                        </Text>
                        {/* Viewers */}
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
                                  {
                                    flex: 1,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                  },
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
                                          borderColor: theme.colors['Light'],
                                          borderLeftWidth: 1,
                                          borderRadius: 6,
                                          borderRightWidth: 1,
                                          borderTopWidth: 1,
                                          height: 20,
                                          justifyContent: 'center',
                                          marginRight: 7,
                                          marginTop: 4,
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
                                            paddingLeft: 5,
                                            paddingRight: 5,
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
    </ScreenContainer>
  );
};

export default withTheme(FollowedCategoriesScreen);
