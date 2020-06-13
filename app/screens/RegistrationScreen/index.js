import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Formik } from 'formik';

import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';
import Input from 'components/Input';
import FlatButton from 'theme/FlatButton';
import DatePicker from 'components/DatePicker';
import PhoneNumberInput from 'components/PhoneNumberInput';
import axios from 'axios';
import { isValidEmail, isValidName, isEmpty } from 'utils/validations';

import messages from './messages';
import style from './style';

const initialValues = {
  firstName: '',
  lastName: '',
  dob: '',
  address: '',
  state: '',
  zipCode: '',
  country: '',
  email: '',
  password: '',
};

class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: PropTypes.object.isRequired,
    };
  }

  render() {
// Create axios client, pre-configured with baseURL


// Set JSON Web Token in Client to be included in all calls


    const {
      props,
    } = this;

    return (
      <Screen>
        <View style={style.container}>
          
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              if (values.firstName && !isValidName(values.firstName)) {
                errors.firstName = true;
              }
              if (values.lastName && !isValidName(values.lastName)) {
                errors.lastName = true;
              }
              if (isEmpty(values.address)) {
                errors.address = true;
              }
              if (isEmpty(values.state)) {
                errors.state = true;
              }
              if (isEmpty(values.zipCode)) {
                errors.zipCode = true;
              }
              if (isEmpty(values.country)) {
                errors.country = true;
              }
              if (isEmpty(values.email) || !isValidEmail(values.email)) {
                errors.email = true;
              }
              if (isEmpty(values.password)) {
                errors.password = true;
              }

              return errors;
            }}
            render={({
              values,
              errors,
              // handleSubmit,
              setFieldValue,
              setFieldTouched,
              touched,
            }) => (
              <>
                <View style={style.groupInputs}>
                  <View style={style.inputWrapper}>
                    <Input
                      key="firstName"
                      value={values.firstName}
                      onChangeText={(e) => setFieldValue('firstName', e)}
                      placeholder={(p) =>
                        !values.firstName ? (
                          <FormattedMessage
                            {...messages.firstNamePlaceHolder}
                            {...p}
                          />
                        ) : null
                      }
                      onBlur={() => {
                        if (!values.firstName && !touched.firstName) {
                          setFieldTouched('firstName');
                        }
                      }}
                      error={(p) =>
                        touched.firstName && errors.firstName ? (
                          <FormattedMessage
                            {...messages.firstNameError}
                            {...p}
                            style={style.error}
                          />
                        ) : null
                      }
                    />
                  </View>
                  <View style={style.inputWrapper}>
                    <Input
                      key="lastName"
                      value={values.lastName}
                      onChangeText={(e) => setFieldValue('lastName', e)}
                      placeholder={(p) =>
                        !values.lastName ? (
                          <FormattedMessage
                            {...messages.lastNamePlaceHolder}
                            {...p}
                          />
                        ) : null
                      }
                      onBlur={() => {
                        if (!values.lastName && !touched.lastName) {
                          setFieldTouched('lastName');
                        }
                      }}
                      error={(p) =>
                        touched.lastName && errors.lastName ? (
                          <FormattedMessage
                            {...messages.lastNameError}
                            {...p}
                            style={style.error}
                          />
                        ) : null
                      }
                    />
                  </View>
                </View>
                <DatePicker
                  onSelect={(date) => {
                    setFieldValue('dob', date);
                  }}
                  mode="date"
                  placeholder={(p) =>
                    !values.date ? (
                      <FormattedMessage {...messages.dobPlaceholder} {...p} />
                    ) : null
                  }
                />
                <View style={style.inputHolder}>
                  <Input
                    key="address"
                    value={values.address}
                    onChangeText={(e) => setFieldValue('address', e)}
                    placeholder={(p) =>
                      !values.address ? (
                        <FormattedMessage
                          {...messages.addressPlaceHolder}
                          {...p}
                        />
                      ) : null
                    }
                    onBlur={() => {
                      if (!values.address && !touched.address) {
                        setFieldTouched('address');
                      }
                    }}
                    error={(p) =>
                      touched.address && errors.address ? (
                        <FormattedMessage
                          {...messages.addressError}
                          {...p}
                          style={style.error}
                        />
                      ) : null
                    }
                  />
                </View>
                <View style={style.groupInputs}>
                  <View style={style.inputWrapper}>
                    <Input
                      key="state"
                      value={values.state}
                      onChangeText={(e) => setFieldValue('state', e)}
                      placeholder={(p) =>
                        !values.state ? (
                          <FormattedMessage
                            {...messages.statePlaceHolder}
                            {...p}
                          />
                        ) : null
                      }
                      onBlur={() => {
                        if (!values.state && !touched.state) {
                          setFieldTouched('state');
                        }
                      }}
                      error={(p) =>
                        touched.state && errors.state ? (
                          <FormattedMessage
                            {...messages.stateError}
                            {...p}
                            style={style.error}
                          />
                        ) : null
                      }
                    />
                  </View>
                  <View style={style.inputWrapper}>
                    <Input
                      key="zipCode"
                      value={values.zipCode}
                      onChangeText={(e) => setFieldValue('zipCode', e)}
                      placeholder={(p) =>
                        !values.zipCode ? (
                          <FormattedMessage
                            {...messages.zipCodePlaceHolder}
                            {...p}
                          />
                        ) : null
                      }
                      onBlur={() => {
                        if (!values.zipCode && !touched.zipCode) {
                          setFieldTouched('zipCode');
                        }
                      }}
                      error={(p) =>
                        touched.zipCode && errors.zipCode ? (
                          <FormattedMessage
                            {...messages.zipCodeError}
                            {...p}
                            style={style.error}
                          />
                        ) : null
                      }
                    />
                  </View>
                </View>
                <View style={style.inputHolder}>
                  <Input
                    key="country"
                    value={values.country}
                    onChangeText={(e) => setFieldValue('country', e)}
                    placeholder={(p) =>
                      !values.country ? (
                        <FormattedMessage
                          {...messages.countryPlaceHolder}
                          {...p}
                        />
                      ) : null
                    }
                    onBlur={() => {
                      if (!values.country && !touched.country) {
                        setFieldTouched('country');
                      }
                    }}
                    error={(p) =>
                      touched.country && errors.country ? (
                        <FormattedMessage
                          {...messages.countryError}
                          {...p}
                          style={style.error}
                        />
                      ) : null
                    }
                  />
                </View>
                <View style={style.phoneNumberInput}>
                  <PhoneNumberInput />
                </View>
                <View style={style.inputHolder}>
                  <Input
                    key="email"
                    value={values.email}
                    onChangeText={(e) => setFieldValue('email', e)}
                    placeholder={(p) =>
                      !values.email ? (
                        <FormattedMessage {...messages.emailPlaceHolder} {...p} />
                      ) : null
                    }
                    onBlur={() => {
                      if (!values.email && !touched.email) {
                        setFieldTouched('email');
                      }
                    }}
                    error={(p) =>
                      touched.email && errors.email ? (
                        <FormattedMessage
                          {...messages.emailError}
                          {...p}
                          style={style.error}
                        />
                      ) : null
                    }
                  />
                </View>
                <View style={style.inputHolder}>
                  <Input
                    key="password"
                    value={values.password}
                    onChangeText={(e) => setFieldValue('password', e)}
                    placeholder={(p) =>
                      !values.password ? (
                        <FormattedMessage
                          {...messages.passwordPlaceHolder}
                          {...p}
                        />
                      ) : null
                    }
                    onBlur={() => {
                      if (!values.password && !touched.password) {
                        setFieldTouched('password');
                      }
                    }}
                    error={(p) =>
                      touched.password && errors.password ? (
                        <FormattedMessage
                          {...messages.passwordError}
                          {...p}
                          style={style.error}
                        />
                      ) : null
                    }
                    secureTextEntry
                  />
                </View>
                <View style={style.nextButtonHolder}>
                  <FlatButton
                    secondary
                    onPress={() => props.navigation.navigate('phoneVerification')}
                    label={(p) => <FormattedMessage {...p} {...messages.next} />}
                  />
                </View>
              </>
            )}
          />
       
        </View>
      </Screen>
    );
  }
}



export default React.memo(RegistrationScreen);
