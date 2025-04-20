import React from 'react';
import { Linking, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { Container, PrimaryButton } from '../components/UI';
import { THEME } from '../const';

export const ContactsSection = () => {
  const phone = '+380501234567';
  const email = 'info@example.com';
  const address = 'вул. Хрещатик, 1, Київ, Україна';

  const openMap = () => {
    const query = encodeURIComponent(address);
    const url =
      Platform.OS === 'ios'
        ? `http://maps.apple.com/?q=${query}`
        : `geo:0,0?q=${query}`;
    Linking.openURL(url);
  };

  return (
    <Container style={{ gap: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
      <Title>Контакти</Title>

      <View>
        <Row onPress={() => Linking.openURL(`tel:${phone}`)}>
            <Label>Телефон:</Label>
            <Value>{phone}</Value>
        </Row>
      </View>

      <View>
        <Row onPress={() => Linking.openURL(`mailto:${email}`)}>
            <Label>Email:</Label>
            <Value>{email}</Value>
        </Row>
      </View>

        <View>
            <Row disabled>
                <Label>Адреса:</Label>
                <Value>{address}</Value>
            </Row>
        </View>

        <PrimaryButton style={{ flexShrink: 1, flexGrow: 0, flexBasis: 'auto' }} onPress={openMap}>
            <MapButtonText>Відкрити в картах</MapButtonText>
        </PrimaryButton>
    </Container>
  );
};

// const Container = styled.View`
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 12px;
//   gap: 12px;
// `;

const Title = styled.Text`
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Row = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

const Label = styled.Text`
    font-weight: 600;
    margin-right: 6px;
`;

const Value = styled.Text`
    color: ${THEME.primaryColor};
    text-decoration: underline;
`;

const MapButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;