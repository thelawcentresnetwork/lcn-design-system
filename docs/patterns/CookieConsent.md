##### Osano, multi-platform, hosted or open source

We recommend using [Osano](https://www.osano.com/cookieconsent) to provide your users of your digital projects with control over cookies and privacy settings and ensure compliance with EU and UK data privacy laws.

Osano offer 50% off their hosted paid plans for Law Centres, but for most use cases, their [open source components](https://github.com/osano/cookieconsent) can be used for free if installed by your digital partner.

The below configuration can be used to match brand colours:

```code js
const cc = new CC({
    "palette": {
    "popup": {
        "background": "#d9eced",
        "text": "#2d3748"
    },
    "button": {
        "background": "#00838a"
    }
    },
    "theme": "classic",
    "position": "bottom-right",
    "type": "opt-in",
    "content": {
    "href": "https://yourlawcentre.com/cookie-policy"
    }
})
```

##### React Component

For React projects, you can simply use the [react-cookie-law](https://www.npmjs.com/package/@palmabit/react-cookie-law) component.

```js padded
    import CookieConsent from '/src/patterns/CookieConsent';
    import { useCookies } from "react-cookie";
    const [cookies, setCookie, removeCookie] = useCookies(["rcl_consent_given"]);
    <>
    <Button 
        mb="5"
        onClick={ e=> removeCookie("rcl_consent_given") }>
        Show Banner
    </Button>

    <CookieConsent />
    </>
```