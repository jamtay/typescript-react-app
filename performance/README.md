1. brew install k6 https://docs.k6.io/docs/installation
2. Click in incognito browser, but before starting, click network tab then preserve logs
3. Once finished right click on a network call and click save as har
4. `k6 convert -o performance_test.js ~/Desktop/localhost.har --only localhost` to convert to js file
5. Run test `k6 run --vus 10 --duration 30s performance_test.js` 10 virtual users for 30 seconds 
6. Would need a reporting tool as it is not out of the box. Suggestions are something like grafana
