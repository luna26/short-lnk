import { WebApp } from 'meteor/webapp';
import { Links } from '../../imports/api/links';

export const redirectGoogle = () => {
  WebApp.connectHandlers.use((req, res, next) => {
    res.statusCode = 302;
    res.setHeader('Location', 'http://www.google.com');
    res.end();
    /*set hhtps code
    res.statusCode = 404;
    set http header
    res.setHeader('my-custom-headers', 'Luna was here!');
    res.write('<h1>Test</h1>');
    end https request terminate de request
    res.end();
    next();
    */
  });
}

export const getUrlById = () => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
    } else {
      next();
    }
  });
}