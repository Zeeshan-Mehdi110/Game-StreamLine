import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
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
  Image,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SelectChannelScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [SuccessPopUp, setSuccessPopUp] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Search Bar */}
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
              flexDirection: 'row',
              height: 56,
              marginBottom: 20,
              marginTop: 20,
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
              editable={true}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
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
              value={textInputValue}
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
        {/* Title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 21,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Select a Channel to Follow'}
        </Text>
        {/* Sub-title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              lineHeight: 21,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {
            'Follow some of the live streaming game channels that you may know below.'
          }
        </Text>
      </View>
      {/* Channels */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingTop: 12 },
          dimensions.width
        )}
      >
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
                listKey={'z5hugng6'}
                numColumns={1}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderRadius: 16,
                          flexDirection: 'row',
                          height: 60,
                          marginLeft: 20,
                          marginRight: 20,
                          marginTop: 20,
                          overflow: 'hidden',
                        },
                        dimensions.width
                      )}
                    >
                      <Circle size={60}>
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
                          { marginLeft: 14 },
                          dimensions.width
                        )}
                      >
                        {/* name */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_600SemiBold',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData?.fullName}
                        </Text>
                        {/* followers */}
                        <Text
                          style={StyleSheet.applyWidth(
                            { color: theme.colors.strong, marginTop: 4 },
                            dimensions.width
                          )}
                        >
                          {flashListData?.id}
                          {'k followers'}
                        </Text>
                      </View>
                      <>
                        {!(flashListData?.id > 3) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              { position: 'absolute', right: 0 },
                              dimensions.width
                            )}
                          >
                            <Touchable>
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color'],
                                    borderRadius: 100,
                                    height: 32,
                                    justifyContent: 'center',
                                    paddingLeft: 20,
                                    paddingRight: 20,
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
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Follow'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                      <>
                        {!(flashListData?.id < 4) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              { position: 'absolute', right: 0 },
                              dimensions.width
                            )}
                          >
                            <Touchable>
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    borderBottomWidth: 2,
                                    borderColor: theme.colors['Custom Color'],
                                    borderLeftWidth: 2,
                                    borderRadius: 100,
                                    borderRightWidth: 2,
                                    borderTopWidth: 2,
                                    height: 32,
                                    justifyContent: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color'],
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Unfollow'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        )}
                      </>
                    </View>
                  );
                }}
              />
            );
          }}
        </ExampleDataApi.FetchUsersGET>
      </View>
      {/* Buttons */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderTopWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Skip */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_18'],
              borderRadius: 100,
              color: theme.colors['Custom Color_10'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
              width: '47%',
            },
            dimensions.width
          )}
          title={'Skip'}
        />
        {/* Continue */}
        <Button
          onPress={() => {
            try {
              setSuccessPopUp(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
              width: '48%',
            },
            dimensions.width
          )}
          title={'Continue '}
        />
      </View>
      {/* Success Modal */}
      <>
        {!SuccessPopUp ? null : (
          <Modal animationType={'none'} transparent={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_22'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.6,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flex: 1,
                  height: '100%',
                  justifyContent: 'center',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom #ffffff'],
                    borderRadius: 52,
                    height: 487,
                    marginLeft: 35,
                    marginRight: 35,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 40,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Successpopup}
                  style={StyleSheet.applyWidth(
                    { height: 180, width: 185 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 24,
                      marginTop: 25,
                    },
                    dimensions.width
                  )}
                >
                  {'Successful!'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 17,
                      lineHeight: 24,
                      marginLeft: 15,
                      marginRight: 15,
                      marginTop: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {
                    'Please wait a moment, we are looking for a suitable recommendation for you...'
                  }
                </Text>
                {/* Next */}
                <Button
                  onPress={() => {
                    try {
                      setSuccessPopUp(false);
                      navigation.navigate('BottomTabNavigator', {
                        screen: 'HomeScreen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.primary,
                      borderRadius: 8,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 16,
                      marginTop: 25,
                      paddingLeft: 60,
                      paddingRight: 60,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Next -->'}
                />
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(SelectChannelScreen);
