import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Checkbox,
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
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const PickwhattoWatchScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
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
              paddingLeft: 10,
              paddingRight: 10,
            },
            dimensions.width
          )}
        >
          {/* search */}
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
          {/* Mic */}
          <Touchable>
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
                color={theme.colors['Custom Color']}
                name={'FontAwesome/microphone'}
                size={20}
              />
            </View>
          </Touchable>
        </View>
        {/* heading */}
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
          {'Pick What You’d Like to Watch'}
        </Text>
        {/* sub-heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              lineHeight: 21,
              marginTop: 10,
              opacity: 0.85,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {
            'Pick some games and we’ll show you some live streams you might like.'
          }
        </Text>
      </View>
      {/* Categories */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginTop: 10, paddingLeft: 20 },
          dimensions.width
        )}
      >
        <ExampleDataApi.FetchUsersGET limit={15}>
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
                listKey={'bng2axzI'}
                numColumns={3}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <Touchable
                      style={StyleSheet.applyWidth(
                        { marginTop: 10 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderRadius: 16,
                            height: 132,
                            overflow: 'hidden',
                            width: 99,
                          },
                          dimensions.width
                        )}
                      >
                        <ImageBackground
                          resizeMode={'cover'}
                          source={Images.Games}
                          style={StyleSheet.applyWidth(
                            { height: '100%', width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Checkbox
                            checkedIcon={'Ionicons/md-checkbox'}
                            color={theme.colors['Custom Color']}
                            onPress={newCheckboxValue => {
                              const checkboxValue = newCheckboxValue;
                              try {
                                setCheckboxValue(checkboxValue);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            status={checkboxValue}
                            style={StyleSheet.applyWidth(
                              { position: 'absolute', right: 10, top: 10 },
                              dimensions.width
                            )}
                            uncheckedColor={'"rgba(0, 0, 0, 0)"'}
                            uncheckedIcon={
                              'MaterialCommunityIcons/border-none-variant'
                            }
                          />
                        </ImageBackground>
                      </View>
                    </Touchable>
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
            borderTopWidth: 1,
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
          onPress={() => {
            try {
              navigation.navigate('SelectChannelScreen');
            } catch (err) {
              console.error(err);
            }
          }}
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
              navigation.navigate('SelectChannelScreen');
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
    </ScreenContainer>
  );
};

export default withTheme(PickwhattoWatchScreen);
