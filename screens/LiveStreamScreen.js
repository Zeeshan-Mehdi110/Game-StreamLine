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
  WebView,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const LiveStreamScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
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
          {'Live Streaming'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { justifyContent: 'space-between' },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <WebView
          cacheEnabled={true}
          incognito={true}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          source={{ uri: 'https://www.youtube.com/embed/Ha_-3ChWCqk' }}
          style={StyleSheet.applyWidth(
            { flex: 1, height: 250 },
            dimensions.width
          )}
        />
        {/* Profile */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 14,
              paddingTop: 14,
            },
            dimensions.width
          )}
        >
          <View>
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
          </View>

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
              {'InAdventure'}
            </Text>
            {/* Game */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  marginTop: 5,
                },
                dimensions.width
              )}
            >
              {'Overwatch 2'}
            </Text>
          </View>
          {/* Follow */}
          <View>
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color'],
                    borderRadius: 100,
                    height: 32,
                    justifyContent: 'center',
                    width: 73,
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
                  {'Follow'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Comments */}
        <ExampleDataApi.FetchUsersGET limit={6}>
          {({ loading, error, data, refetchUsers }) => {
            const commentsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlashList
                contentContainerStyle={StyleSheet.applyWidth(
                  { paddingBottom: 20 },
                  dimensions.width
                )}
                data={commentsData}
                estimatedItemSize={50}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'oHGOGGrJ'}
                numColumns={1}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingBottom: 8,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                    >
                      <Circle bgColor={theme.colors.light} size={36}>
                        <Image
                          resizeMode={'cover'}
                          source={{ uri: `${flashListData?.avatar}` }}
                          style={StyleSheet.applyWidth(
                            { height: 36, width: 36 },
                            dimensions.width
                          )}
                        />
                      </Circle>

                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1, marginLeft: 15 },
                          dimensions.width
                        )}
                      >
                        {/* name */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_300Light',
                              opacity: 0.8,
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData?.fullName}
                        </Text>
                        {/* comment */}
                        <Text
                          numberOfLines={1}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_400Regular',
                              marginTop: 2,
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData?.bio}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            );
          }}
        </ExampleDataApi.FetchUsersGET>
        {/* Chat tray */}
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
              justifyContent: 'space-between',
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Custom Color']}
            name={'Feather/smile'}
            size={20}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                justifyContent: 'center',
                paddingLeft: 10,
                paddingRight: 10,
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
              placeholder={'Send a message...'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Strong'],
                  fontFamily: 'Inter_400Regular',
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
          <Icon
            color={theme.colors['Custom Color']}
            name={'FontAwesome/send'}
            size={20}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LiveStreamScreen);
