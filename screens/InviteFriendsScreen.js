import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
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
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const InviteFriendsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

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
          {'Invite Friends'}
        </Text>
      </View>
      {/* Friends */}
      <ExampleDataApi.FetchUsersGET limit={12}>
        {({ loading, error, data, refetchUsers }) => {
          const friendsData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlatList
              contentContainerStyle={StyleSheet.applyWidth(
                { marginLeft: 20, marginRight: 20 },
                dimensions.width
              )}
              data={friendsData}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'sHjVaSM2'}
              numColumns={1}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: 10,
                        paddingTop: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Photo */}
                      <Circle bgColor={theme.colors.light} size={60}>
                        <Image
                          resizeMode={'cover'}
                          source={{ uri: `${listData?.avatar}` }}
                          style={StyleSheet.applyWidth(
                            { height: 60, width: 60 },
                            dimensions.width
                          )}
                        />
                      </Circle>

                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 18 },
                          dimensions.width
                        )}
                      >
                        {/* Name */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_600SemiBold',
                              fontSize: 17,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.fullName}
                        </Text>
                        {/* Number */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_400Regular',
                              fontSize: 15,
                              marginTop: 5,
                            },
                            dimensions.width
                          )}
                        >
                          {'+'}
                          {listData?.phone}
                        </Text>
                      </View>
                    </View>

                    <Touchable>
                      {/* Invite */}
                      <>
                        {!(listData?.id > 4) ? null : (
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
                                justifyContent: 'center',
                                paddingBottom: 5,
                                paddingLeft: 14,
                                paddingRight: 14,
                                paddingTop: 5,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color'],
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                },
                                dimensions.width
                              )}
                            >
                              {'Invite'}
                            </Text>
                          </View>
                        )}
                      </>
                      {/* Invited */}
                      <>
                        {!(listData?.id < 5) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['Custom Color'],
                                borderRadius: 100,
                                justifyContent: 'center',
                                paddingBottom: 7,
                                paddingLeft: 14,
                                paddingRight: 14,
                                paddingTop: 7,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom #ffffff'],
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                },
                                dimensions.width
                              )}
                            >
                              {'Invited'}
                            </Text>
                          </View>
                        )}
                      </>
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

export default withTheme(InviteFriendsScreen);
