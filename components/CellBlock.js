import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
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

const CellBlock = props => {
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
          { alignItems: 'center', flexDirection: 'row', height: 160 },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Games}
          style={StyleSheet.applyWidth(
            { borderRadius: 16, height: 160, width: 120 },
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}
        >
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

          <ExampleDataApi.FetchUsersGET limit={3}>
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
                  listKey={'DzUGzY53'}
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
      </View>
    </Touchable>
  );
};

export default withTheme(CellBlock);
