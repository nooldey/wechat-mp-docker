const sha1 = require('sha1')

module.exports = (opts) => {
    return async(ctx, next) => {
        const rq = ctx.query;
        const token = config.wechat.token;
        const { signature, nonce, timestamp, echostr } = rq;
        let str = [token, timestamp, nonce].sort().join('');
        let sha = sha1(str);
        ctx.type = 'text/json';
        ctx.body = (sha === signature) ? echostr + '' : "failed";
        await next();
    }
}