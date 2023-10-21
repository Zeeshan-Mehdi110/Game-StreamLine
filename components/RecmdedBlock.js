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

const RecmdedBlock = props => {
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
          {
            alignItems: 'flex-start',
            flexDirection: 'row',
            height: 90,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Video}
          style={StyleSheet.applyWidth(
            { borderRadius: 16, height: 90, width: 160 },
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginLeft: 12 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Circle bgColor={theme.colors.light} size={24}>
              <Image
                resizeMode={'cover'}
                source={{ uri: '' }}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </Circle>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                  marginLeft: 6,
                },
                dimensions.width
              )}
            >
              {'InAdventure'}
            </Text>
          </View>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_300Light',
                fontSize: 12,
                marginBottom: 15,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Aleyang VS Storyzast'}
          </Text>

          <ExampleDataApi.FetchUsersGET limit={2}>
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
                  listKey={'V5FDHdem'}
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
                              fontSize: 11,
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
    </Touchable>
  );
};

export default withTheme(RecmdedBlock);
