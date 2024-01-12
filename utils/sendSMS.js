import axios from "axios";

export const sendSMS = async (to, msg) => {
  await axios.get(
    `http://bulksmsbd.net/api/smsapi?api_key=275xB5W0rPiNYPY6xU2N&type=text&number=${to}&senderid=8809617614535&message=${msg}`
  );
};
