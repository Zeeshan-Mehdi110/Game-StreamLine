import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
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

const RecommendedScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [options, setOptions] = React.useState(false);

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
          {'Recommended For You'}
        </Text>
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
              name={'Feather/search'}
              size={24}
            />
          </Touchable>
        </View>
      </View>

      <ExampleDataApi.FetchUsersGET limit={10}>
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
              listKey={'u04PCGXX'}
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
                          { flex: 1, marginLeft: 12, marginRight: 10 },
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
                          numberOfLines={1}
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

                      <Touchable
                        onPress={() => {
                          try {
                            setOptions(true);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
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
      <ActionSheet visible={options}>
        {/* Share */}
        <ActionSheetItem
          color={theme.colors.strong}
          label={'Share'}
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { textAlign: 'center' },
            dimensions.width
          )}
        />
        {/* Not Interested */}
        <ActionSheetItem
          color={theme.colors.strong}
          label={'Not Interested'}
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { textAlign: 'center' },
            dimensions.width
          )}
        />
        {/* Dont Recommend Channel */}
        <ActionSheetItem
          color={theme.colors.strong}
          label={'Don’t Recommend Channel'}
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { textAlign: 'center' },
            dimensions.width
          )}
        />
        {/* Report */}
        <ActionSheetItem
          color={theme.colors.strong}
          label={'Report'}
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { textAlign: 'center' },
            dimensions.width
          )}
        />
        <ActionSheetCancel
          label={'Cancel'}
          onPress={() => {
            try {
              setOptions(false);
            } catch (err) {
              console.error(err);
            }
          }}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

export default withTheme(RecommendedScreen);
