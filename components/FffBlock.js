import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Circle, Icon, Touchable, withTheme } from '@draftbit/ui';
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

const FffBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Touchable
      style={StyleSheet.applyWidth(
        { marginLeft: 20, marginRight: 20, marginTop: 20 },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column', paddingBottom: 4 },
          dimensions.width
        )}
      >
        <View>
          <Image
            resizeMode={'cover'}
            source={Images.LastStream}
            style={StyleSheet.applyWidth(
              { borderRadius: 16, height: 215 },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_8'],
                borderRadius: 6,
                height: 24,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 20,
                width: 41,
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
                  paddingBottom: 4,
                  paddingTop: 4,
                },
                dimensions.width
              )}
            >
              {'LIVE'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_2'],
                borderRadius: 6,
                bottom: 20,
                height: 24,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                width: 90,
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
                  paddingBottom: 4,
                  paddingTop: 4,
                },
                dimensions.width
              )}
            >
              {'9.4K Viewers'}
            </Text>
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
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

          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginLeft: 16 },
              dimensions.width
            )}
          >
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
              {'Animationitda'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  marginBottom: 10,
                  marginTop: 10,
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Drops Enabled - 10H+ Streams Valoran...'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  marginBottom: 10,
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Valorant'}
            </Text>

            <ExampleDataApi.FetchUsersGET limit={4}>
              {({ loading, error, data, refetchUsers }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
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
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    listKey={'ifAtOKJb'}
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
                                fontSize: 12,
                                opacity: 0.75,
                                paddingBottom: 3,
                                paddingLeft: 5,
                                paddingRight: 5,
                                paddingTop: 3,
                              },
                              dimensions.width
                            )}
                          >
                            {null}
                          </Text>
                        </View>
                      );
                    }}
                  />
                );
              }}
            </ExampleDataApi.FetchUsersGET>
          </View>

          <Touchable>
            <Icon name={'MaterialCommunityIcons/dots-vertical'} size={24} />
          </Touchable>
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(FffBlock);
