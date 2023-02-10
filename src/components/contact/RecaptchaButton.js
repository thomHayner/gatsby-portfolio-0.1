import * as React from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormControl } from 'react-bootstrap';

// DEVNOTE: How to use package: https://www.npmjs.com/package/react-google-recaptcha-v3
// DEVNOTE: What to do with token: https://docs.getform.io/installations/spam-filtering/recaptcha-v3/
// DEVNOTE: Alt guide: https://alphonso-javier.medium.com/how-to-use-recaptcha-v3-with-gatsbyjs-and-express-2e963575db60

export default function RecaptchaButton() {
  const [reCaptchaToken, setRecaptchaToken] = React.useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const handleReCaptchaVerify = React.useCallback(async () => {
    if (!executeRecaptcha) {
      return
    }
    const token = await executeRecaptcha('submit');
    setRecaptchaToken(token);
  }, [executeRecaptcha]);
  
  React.useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);
  
  return (
    <FormControl type="hidden" id="captchaResponse" name="g-recaptcha-response" value={reCaptchaToken} />
  )
};
