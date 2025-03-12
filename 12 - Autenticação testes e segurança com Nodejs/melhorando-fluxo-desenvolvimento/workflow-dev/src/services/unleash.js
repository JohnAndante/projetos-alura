import { initialize } from 'unleash-client';

const unleash = initialize({
    url: 'http://localhost:4242/',
    appName: 'default',
    customHeaders: { Authorization: process.env.UNLEASH_TOKEN },
});

export default unleash;
