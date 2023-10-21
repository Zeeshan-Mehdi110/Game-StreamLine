import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
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

const EeBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { flex: 1, paddingBottom: 15 },
        dimensions.width
      )}
    >
      <ExampleDataApi.FetchUsersGET limit={20}>
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
              listKey={'z3oBQu0I'}
              numColumns={1}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <Touchable
                    style={StyleSheet.applyWidth(
                      { marginLeft: 20, marginRight: 20, marginTop: 15 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: 80,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={Images.Video}
                        style={StyleSheet.applyWidth(
                          { borderRadius: 16, height: 80, width: 140 },
                          dimensions.width
                        )}
                      />
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1, marginLeft: 12 },
                          dimensions.width
                        )}
                      >
                        {/* Name */}
                        <Text
                          numberOfLines={1}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_600SemiBold',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Drop Enabled | Overw...'}
                        </Text>

                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_400Regular',
                              marginBottom: 10,
                              marginTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {'Spoorge • Overwatch 2'}
                        </Text>
                        {/* Views | timestamp */}
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
                          {'4.8M Views • 1 hour ago'}
                        </Text>
                      </View>
                    </View>
                  </Touchable>
                );
              }}
            />
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </View>
  );
};

export default withTheme(EeBlock);
