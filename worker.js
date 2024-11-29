export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        url.hostname = env.HOST || 'www.speedtest.net';
        url.protocol = 'https:';
        const modifiedRequest = new Request(url, request);
        const response = await fetch(modifiedRequest);

        // Log response status and headers for debugging
        console.log("Response Status:", response.status);
        console.log("Response Headers:", [...response.headers.entries()]);
        
        return response;
    }
}