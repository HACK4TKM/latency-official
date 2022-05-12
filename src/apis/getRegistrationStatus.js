import {BASE_URL} from '../constants/urls';
async function getRegistrationStatus(phoneNumber) {
    const response = await fetch(
        BASE_URL + "/register/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                phone_no:phoneNumber
            })
        }

      );
    //   let resp = await response.json();
      return response;
}

export default getRegistrationStatus;