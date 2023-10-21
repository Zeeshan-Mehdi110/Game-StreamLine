import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ReportChannelScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [reasons, setReasons] = React.useState([
    'Sexual Content',
    'Graphic Violence',
    'Hateful or Abusive Content',
    'Harmful to Device or Data',
    'Legally Illegitimate',
    'Improper Game Rating',
    'Discriminating Certain Parties',
    'Illegal Prescription',
    'Copycat or Impersonation',
    'Other Reason',
  ]);
  const [selectedReason, setSelectedReason] = React.useState('Sexual Content');

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
          {'Report TalesWire'}
        </Text>
      </View>
      {/* Profile */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: theme.colors['Divider'],
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <Circle bgColor={theme.colors.light} size={100}>
          <Image
            resizeMode={'cover'}
            source={Images.User}
            style={StyleSheet.applyWidth(
              { height: 100, width: 100 },
              dimensions.width
            )}
          />
        </Circle>

        <View
          style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                { fontFamily: 'Inter_600SemiBold', fontSize: 18 },
                dimensions.width
              )}
            >
              {'TalesWire'}
            </Text>
            <Icon
              color={theme.colors['Custom Color']}
              name={'MaterialIcons/verified'}
              size={24}
              style={StyleSheet.applyWidth({ marginLeft: 4 }, dimensions.width)}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              { color: theme.colors.strong, marginTop: 6 },
              dimensions.width
            )}
          >
            {'265K Followers'}
          </Text>
        </View>
      </View>
      {/* Reasons */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingTop: 10 },
          dimensions.width
        )}
      >
        {/* header */}
        <Text
          style={StyleSheet.applyWidth(
            {
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              marginBottom: 14,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {'Why did you report this channel?'}
        </Text>
        <FlashList
          contentContainerStyle={StyleSheet.applyWidth(
            { flex: 1, paddingRight: 20 },
            dimensions.width
          )}
          data={reasons}
          estimatedItemSize={50}
          keyExtractor={flashListData =>
            flashListData?.id ||
            flashListData?.uuid ||
            JSON.stringify(flashListData)
          }
          listKey={'JkSUW1Ev'}
          numColumns={1}
          renderItem={({ item }) => {
            const flashListData = item;
            return (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedReason(flashListData);
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
                      paddingBottom: 7,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 7,
                    },
                    dimensions.width
                  )}
                >
                  {/* selected */}
                  <>
                    {!(selectedReason === flashListData) ? null : (
                      <Icon
                        color={theme.colors['Custom Color']}
                        name={'Ionicons/radio-button-on'}
                        size={24}
                      />
                    )}
                  </>
                  {/* unselected */}
                  <>
                    {!(selectedReason !== flashListData) ? null : (
                      <Icon
                        color={theme.colors['Custom Color']}
                        name={'Ionicons/radio-button-off-sharp'}
                        size={24}
                      />
                    )}
                  </>
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        paddingLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {flashListData}
                  </Text>
                </View>
              </Touchable>
            );
          }}
        />
      </View>
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
        {/* Cancel */}
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
          title={'Cancel'}
        />
        {/* Submit */}
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
          title={'Submit'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ReportChannelScreen);
