import { BASE_URL } from '../constants/urls';

export default async function getRazerPayDetails(phoneNumber){
        const response = await fetch(
            BASE_URL + "/register/payment/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    phone_no:phoneNumber
                })
            }
    
          );
          let resp = await response.json();
          return resp;
    };

