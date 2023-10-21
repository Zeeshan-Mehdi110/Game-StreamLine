import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const FilterandSortScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [selectedoption, setSelectedoption] = React.useState(
    'Recommended For You'
  );
  const [tags, setTags] = React.useState(['English', '100%', 'Ranked']);

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
            paddingLeft: 10,
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
              name={'Ionicons/close'}
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
          {'Filter & Sort'}
        </Text>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        {/* Search */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20, paddingTop: 20 },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 17,
              },
              dimensions.width
            )}
          >
            {'Filter By Tags'}
          </Text>

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
                marginBottom: 10,
                marginTop: 20,
                paddingBottom: 5,
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
                placeholder={'Search Tags'}
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
          <FlashList
            contentContainerStyle={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row' },
              dimensions.width
            )}
            data={tags}
            estimatedItemSize={50}
            horizontal={true}
            keyExtractor={flashListData =>
              flashListData?.id ||
              flashListData?.uuid ||
              JSON.stringify(flashListData)
            }
            listKey={'ag6I37Ef'}
            numColumns={1}
            renderItem={({ item }) => {
              const flashListData = item;
              return (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color'],
                      borderLeftWidth: 1,
                      borderRadius: 100,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      height: 38,
                      justifyContent: 'center',
                      marginRight: 10,
                      paddingLeft: 14,
                      paddingRight: 14,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_500Medium',
                      },
                      dimensions.width
                    )}
                  >
                    {flashListData}
                  </Text>

                  <Touchable
                    style={StyleSheet.applyWidth(
                      { marginLeft: 8 },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'Ionicons/close'}
                      size={20}
                    />
                  </Touchable>
                </View>
              );
            }}
          />
        </View>
        {/* Sort Options */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginLeft: 20, marginRight: 20, marginTop: 40 },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 17,
                paddingBottom: 15,
              },
              dimensions.width
            )}
          >
            {'Sort'}
          </Text>

          <Touchable
            onPress={() => {
              try {
                setSelectedoption('Recommended For You');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  paddingTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon name={'AntDesign/staro'} size={24} />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16 },
                  dimensions.width
                )}
              >
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 17,
                    },
                    dimensions.width
                  )}
                >
                  {'Recommended For You'}
                </Text>
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 14,
                      lineHeight: 21,
                      paddingTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  {'Show the most relevants channel based on your history'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', width: 40 },
                  dimensions.width
                )}
              >
                <>
                  {!(selectedoption === 'Recommended For You') ? null : (
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'AntDesign/check'}
                      size={24}
                    />
                  )}
                </>
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                setSelectedoption('Viewers (High to Low)');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  paddingTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon name={'SimpleLineIcons/arrow-down-circle'} size={24} />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16 },
                  dimensions.width
                )}
              >
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 17,
                    },
                    dimensions.width
                  )}
                >
                  {'Viewers (High to Low)'}
                </Text>
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 14,
                      lineHeight: 21,
                      paddingTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  {'Show channels based on the most highest number of viewers'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', width: 40 },
                  dimensions.width
                )}
              >
                <>
                  {!(selectedoption === 'Viewers (High to Low)') ? null : (
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'AntDesign/check'}
                      size={24}
                    />
                  )}
                </>
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                setSelectedoption('Viewers (Low to High)');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  paddingTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon name={'SimpleLineIcons/arrow-up-circle'} size={24} />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16 },
                  dimensions.width
                )}
              >
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 17,
                    },
                    dimensions.width
                  )}
                >
                  {'Viewers (Low to High)'}
                </Text>
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 14,
                      lineHeight: 21,
                      paddingTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  {'Show channels based on the most lowest number of viewers'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', width: 40 },
                  dimensions.width
                )}
              >
                <>
                  {!(selectedoption === 'Viewers (Low to High)') ? null : (
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'AntDesign/check'}
                      size={24}
                    />
                  )}
                </>
              </View>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                setSelectedoption('Recently Started');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  paddingTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                name={'MaterialCommunityIcons/clock-time-four-outline'}
                size={24}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16 },
                  dimensions.width
                )}
              >
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 17,
                    },
                    dimensions.width
                  )}
                >
                  {'Recently Started'}
                </Text>
                {/* Title */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 14,
                      lineHeight: 21,
                      paddingTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  {'Show channels based on how recently they went live'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', width: 40 },
                  dimensions.width
                )}
              >
                <>
                  {!(selectedoption === 'Recently Started') ? null : (
                    <Icon
                      color={theme.colors['Custom Color']}
                      name={'AntDesign/check'}
                      size={24}
                    />
                  )}
                </>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
      {/* Actions */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Reset */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_18'],
              borderRadius: 100,
              color: theme.colors['Custom Color'],
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
              height: 58,
              textAlign: 'center',
              width: '48%',
            },
            dimensions.width
          )}
          title={'Reset'}
        />
        {/* Apply */}
        <Button
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
              height: 58,
              textAlign: 'center',
              width: '48%',
            },
            dimensions.width
          )}
          title={'Apply'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FilterandSortScreen);
