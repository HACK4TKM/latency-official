import { BASE_URL } from '../constants/urls';

export default async function submitDetails(phoneNumber){
        const response = await fetch(
            BASE_URL + "/register/details/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    phone_no:phoneNumber
                })
            }
    
          );
          return response;
    };

