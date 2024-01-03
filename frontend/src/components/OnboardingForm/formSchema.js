import * as yup from "yup";
import OnboardingBioForm from './OnboardingBioForm';
import AddProfileForm from './AddProfileForm';
import { isValidFileType } from 'utils/helperFunction';
import AgeForm from './AgeForm';
import OnboardingGenderForm from './GenderForm';
import AddressForm from './AddressForm';

export const onboardingForms = {
    active_1: {
        render: (props) => <OnboardingBioForm {...props} />,
        schema: yup.object().shape({
            username: yup.string().required("Username is required"),
            bio: yup.string()
        }),
        height: '350px',
    },
    active_2: {
        render: (props) => <AddProfileForm {...props} />,
        schema: yup.object().shape({
            profileImage: yup
                .mixed()
                .nullable()
                .test("is-valid-type", "Not a valid image type", (value) => {
                    if (value === null || value === "") {
                        return true;
                    }
                    return isValidFileType(value, "image");
                }),
        }),
        height: '120px',

    },
    active_3: {
        render: (props) => <OnboardingGenderForm {...props} />,
        schema: yup.object().shape({
            gender: yup.string()
        }),
        height: '170px',
    },
    active_4: {
        render: (props) => <AgeForm {...props} />,
        schema: yup.object().shape({
            dob: yup.date().nullable()
        }),
        height: '70px',
    },
    active_5: {
        render: (props) => <AddressForm {...props} />,
        schema: yup.object().shape({
            address: yup.string(),
            country: yup.string(),
            state: yup.string(),
            city: yup.string(),
            postalCode: yup.string(),
        }),
        height: '280px',
    }
}