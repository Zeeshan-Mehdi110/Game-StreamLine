import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const LanguageSettingsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [OtherLanguagesArr, setOtherLanguagesArr] = React.useState([
    'Chinese',
    'Croatian',
    'Czech',
    'Danish',
    'Filpino',
    'Finland',
  ]);
  const [SuggestedLanguagesArr, setSuggestedLanguagesArr] = React.useState([
    'English (UK)',
    'English',
    'Bahasa Indonesia',
  ]);
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
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
          {'Language'}
        </Text>
      </View>
      {/* Languages Container */}
      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        {/* Suggested Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingBottom: 12,
            },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginBottom: 16,
                marginTop: 5,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Suggested'}
          </Text>
          <FlatList
            data={SuggestedLanguagesArr}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            listKey={'2kz9lH6L'}
            numColumns={1}
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {listData}
                    </Text>
                    <>
                      {!(Constants['Language'] === listData) ? null : (
                        <Icon
                          color={theme.colors['Custom Color']}
                          name={'Ionicons/radio-button-on'}
                          size={24}
                        />
                      )}
                    </>
                    <>
                      {!(Constants['Language'] !== listData) ? null : (
                        <Icon
                          color={theme.colors['Custom Color']}
                          name={'Ionicons/radio-button-off-sharp'}
                          size={24}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
          />
        </View>
        {/* Other Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderRadius: 12,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginBottom: 16,
                marginTop: 5,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Language'}
          </Text>
          <FlatList
            data={OtherLanguagesArr}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            listKey={'ncfyWbnU'}
            numColumns={1}
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {listData}
                    </Text>
                    <>
                      {!(Constants['Language'] === listData) ? null : (
                        <Icon
                          color={theme.colors['Custom Color']}
                          name={'Ionicons/radio-button-on'}
                          size={24}
                        />
                      )}
                    </>
                    <>
                      {!(Constants['Language'] !== listData) ? null : (
                        <Icon
                          color={theme.colors['Custom Color']}
                          name={'Ionicons/radio-button-off-sharp'}
                          size={24}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LanguageSettingsScreen);
