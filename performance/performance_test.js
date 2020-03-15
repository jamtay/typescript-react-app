import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("Global", function() {
		let req, res;
		req = [{
			"method": "post",
			"url": "http://localhost:3000/api/v1/contact",
			"body": "{\"firstName\":\"James\",\"lastName\":\"Taylor\",\"email\":\"scght@hsm.com\",\"company\":\"Company\",\"phone\":\"1234567\"}",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Content-Type": "application/json;charset=UTF-8",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/create",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.57);
		req = [{
			"method": "get",
			"url": "http://localhost:3000/api/v1/contact",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(9.33);
		req = [{
			"method": "get",
			"url": "http://localhost:3000/api/v1/contact/5e1ef6c0990bc66465516a05",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/edit/5e1ef6c0990bc66465516a05",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(5.99);
		req = [{
			"method": "put",
			"url": "http://localhost:3000/api/v1/contact/5e1ef6c0990bc66465516a05",
			"body": "{\"created_date\":\"2020-01-15T10:48:13.279Z\",\"_id\":\"5e1ef6c0990bc66465516a05\",\"firstName\":\"James\",\"lastName\":\"Taylor\",\"email\":\"scght@hsm.com\",\"company\":\"Company123\",\"phone\":\"12345672345\",\"__v\":0}",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Content-Type": "application/json;charset=UTF-8",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/edit/5e1ef6c0990bc66465516a05",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.57);
		req = [{
			"method": "get",
			"url": "http://localhost:3000/api/v1/contact",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
					"If-None-Match": "W/\"193a-n3f+BqbiVKmvjKfLAAKcLPQC7/c\""
				}
			}
		}];
		res = http.batch(req);
		sleep(8.72);
		req = [{
			"method": "get",
			"url": "http://localhost:3000/api/v1/contact/5e1ef6c0990bc66465516a05",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/view/5e1ef6c0990bc66465516a05",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(2.22);
		req = [{
			"method": "get",
			"url": "http://localhost:3000/api/v1/contact",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
					"If-None-Match": "W/\"1941-qxs7P4iMXzGoAis73kXzc3dZ00I\""
				}
			}
		}];
		res = http.batch(req);
		sleep(3.59);
		req = [{
			"method": "del",
			"url": "http://localhost:3000/api/v1/contact/5e1ef6c0990bc66465516a05",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Accept": "application/json, text/plain, */*",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
					"Origin": "http://localhost:3001",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "http://localhost:3001/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
