import config from './config.json' with {type: 'json'};
import data from './data.json' with {type: 'json'};

if (config.security.insecure) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  process.removeAllListeners('warning');
}

let successes = 0;
let failures = 0;

async function run() {
  const toObj = (val) => (val && typeof val === 'object' ? val : {});

  const verbose = config.log.verbose || false;

  console.log('\n');

  for (const request of data.requests) {
    const requestConfig = {
      ...data.template,
      ...request,
      headers: {...toObj(data.template?.headers), ...toObj(request?.headers)},
      queryParams: {...toObj(data.template?.queryParams), ...toObj(request?.queryParams)},
      payload: {...toObj(data.template?.payload), ...toObj(request?.payload)}
    };

    const url = new URL(requestConfig.segment, requestConfig.domain);
    Object.entries(requestConfig.queryParams || {}).forEach(([k, v]) => url.searchParams.append(k, v));

    console.log(`[${requestConfig.method}] ${url.href}\n`);

    try {
      const hasBody = !['GET', 'HEAD'].includes(requestConfig.method.toUpperCase()) && Object.keys(requestConfig.payload).length > 0;

      await fetch(url.href, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: hasBody
          ? JSON.stringify(requestConfig.payload)
          : null
      }).then(async (response) => {
        if (response.ok) {
          console.log(`✅ ${response.status}`);
          successes++;
        } else {
          console.error(`❌ ${response.status}`);
          failures++;
        }

        if (verbose) {
          const responsePayload = await response.text();
          let parsedResponsePayload = "";
          try {
            parsedResponsePayload = JSON.parse(responsePayload);
          } catch {
            parsedResponsePayload = responsePayload || '[Empty Response]';
          }
          console.log(parsedResponsePayload);
        }
      });

    } catch (err) {
      console.error(`❌ Error. ${err.message}`);
    }

    console.log('\n' + '-'.repeat(10), '\n');
  }
}

await run().then(() => {
  console.log("✅ PASS:", successes);
  console.log("❌ FAIL:", failures);
});
