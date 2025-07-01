<!-- Start SDK Example Usage [usage] -->
```typescript
import { Qti } from "qti";

const qti = new Qti({
  security: {
    oAuth2: {
      clientID: process.env["QTI_CLIENT_ID"] ?? "",
      clientSecret: process.env["QTI_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["QTI_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const result = await qti.stimulusManagement.searchStimuli({
    sort: "createdAt",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->