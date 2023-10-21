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

const NotificationListScreen = props => {
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
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Notification'}
        </Text>
        {/* Settings */}
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
                navigation.navigate('NotificationSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'AntDesign/setting'}
              size={24}
            />
          </Touchable>
        </View>
      </View>

      <ExampleDataApi.FetchUsersGET limit={12}>
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
              listKey={'F9hB4JfF'}
              numColumns={1}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 74,
                        justifyContent: 'space-between',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 12,
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
                        { flex: 1, paddingLeft: 12, paddingRight: 12 },
                        dimensions.width
                      )}
                    >
                      <Text
                        numberOfLines={2}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Inter_500Medium',
                            fontSize: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {'Tanneuf is now live: Dota 2'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Inter_400Regular',
                            fontSize: 12,
                            marginTop: 4,
                          },
                          dimensions.width
                        )}
                      >
                        {'1 hour ago'}
                      </Text>
                    </View>
                    <Image
                      resizeMode={'cover'}
                      source={Images.Notif}
                      style={StyleSheet.applyWidth(
                        { height: 68, width: 120 },
                        dimensions.width
                      )}
                    />
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

export default withTheme(NotificationListScreen);
