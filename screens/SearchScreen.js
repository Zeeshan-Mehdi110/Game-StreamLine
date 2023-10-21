import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
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
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SearchScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 10,
          },
          dimensions.width
        )}
      >
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
              name={'AntDesign/arrowleft'}
              size={24}
              style={StyleSheet.applyWidth({ opacity: 0.7 }, dimensions.width)}
            />
          </View>
        </Touchable>

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
              flex: 1,
              flexDirection: 'row',
              height: 56,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 20,
              marginTop: 12,
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
      </View>
      <Divider
        color={theme.colors.divider}
        style={StyleSheet.applyWidth(
          { height: 1, marginBottom: 20, marginLeft: 20, marginRight: 20 },
          dimensions.width
        )}
      />
      <ExampleDataApi.FetchUsersGET limit={7}>
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
              listKey={'Uhck4LnO'}
              numColumns={1}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('SearchResultsScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { marginTop: 2 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginLeft: 20,
                          marginRight: 20,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Inter_400Regular',
                            fontSize: 15,
                            opacity: 0.6,
                          },
                          dimensions.width
                        )}
                      >
                        {'Grand Theft Auto V'}
                      </Text>
                      <Icon
                        name={'Ionicons/close-outline'}
                        size={24}
                        style={StyleSheet.applyWidth(
                          { opacity: 0.5 },
                          dimensions.width
                        )}
                      />
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

export default withTheme(SearchScreen);
